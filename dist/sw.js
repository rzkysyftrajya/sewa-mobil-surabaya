// Service Worker for performance optimization
const CACHE_NAME = "sewa-mobil-v1";
const STATIC_CACHE = "static-v1";
const DYNAMIC_CACHE = "dynamic-v1";

// Resources to cache immediately
const STATIC_ASSETS = [
  "/",
  "/index.html",
  "/logo.png",
  "/assets/armada-lepas-kunci/TOYOTA-ALPHARD.webp",
  "/assets/armada-lepas-kunci/TOYOTA-FORTUNER.webp",
  "/assets/armada-lepas-kunci/MITSUBISHI-PAJERO.webp",
  "/assets/armada-lepas-kunci/TOYOTA-AVANZA.webp",
  "/assets/armada-lepas-kunci/TOYOTA-INNOVA-REBORN.webp",
  "/assets/armada-lepas-kunci/TOYOTA-HIACE-PREMIO.webp",
  "/assets/armada-lepas-kunci/TOYOTA-HIACE-COMMUTER.webp",
];

// Cache strategies
const CACHE_STRATEGIES = {
  CACHE_FIRST: "cache-first",
  NETWORK_FIRST: "network-first",
  STALE_WHILE_REVALIDATE: "stale-while-revalidate",
  NETWORK_ONLY: "network-only",
  CACHE_ONLY: "cache-only",
};

// Install event - cache static assets
self.addEventListener("install", (event) => {
  console.log("[SW] Installing Service Worker");

  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => {
        console.log("[SW] Caching static assets");
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log("[SW] Static assets cached successfully");
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error("[SW] Failed to cache static assets:", error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  console.log("[SW] Activating Service Worker");

  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log("[SW] Deleting old cache:", cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log("[SW] Service Worker activated");
        return self.clients.claim();
      })
  );
});

// Fetch event - implement caching strategies
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== "GET") {
    return;
  }

  // Skip external requests
  if (url.origin !== self.location.origin) {
    return;
  }

  // Apply different caching strategies based on resource type
  if (isImageRequest(request)) {
    event.respondWith(handleImageRequest(request));
  } else if (isHTMLRequest(request)) {
    event.respondWith(handleHTMLRequest(request));
  } else if (isCSSRequest(request)) {
    event.respondWith(
      handleStaticAssetRequest(request, CACHE_STRATEGIES.CACHE_FIRST)
    );
  } else if (isJSRequest(request)) {
    event.respondWith(
      handleStaticAssetRequest(request, CACHE_STRATEGIES.CACHE_FIRST)
    );
  } else {
    event.respondWith(handleDynamicRequest(request));
  }
});

// Handle image requests with cache-first strategy
async function handleImageRequest(request) {
  const cache = await caches.open(DYNAMIC_CACHE);
  const cachedResponse = await cache.match(request);

  if (cachedResponse) {
    // Return cached image and update cache in background
    updateCacheInBackground(cache, request);
    return cachedResponse;
  }

  // Fetch from network and cache
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error("[SW] Failed to fetch image:", error);
    // Return placeholder image or cached fallback
    return new Response("Image not available", { status: 404 });
  }
}

// Handle HTML requests with network-first strategy
async function handleHTMLRequest(request) {
  const cache = await caches.open(DYNAMIC_CACHE);

  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log("[SW] Network failed, trying cache for:", request.url);
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    // Return offline page or basic HTML
    return caches.match("/") || new Response("Offline", { status: 503 });
  }
}

// Handle static assets with cache-first strategy
async function handleStaticAssetRequest(request, strategy) {
  const cache = await caches.open(STATIC_CACHE);

  switch (strategy) {
    case CACHE_STRATEGIES.CACHE_FIRST:
      const cachedResponse = await cache.match(request);
      if (cachedResponse) {
        return cachedResponse;
      }

      try {
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
          cache.put(request, networkResponse.clone());
        }
        return networkResponse;
      } catch (error) {
        console.error("[SW] Failed to fetch static asset:", error);
        return new Response("Asset not available", { status: 404 });
      }

    default:
      return fetch(request);
  }
}

// Handle dynamic requests with stale-while-revalidate strategy
async function handleDynamicRequest(request) {
  const cache = await caches.open(DYNAMIC_CACHE);

  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok && isCacheable(request)) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    return new Response("Resource not available", { status: 503 });
  }
}

// Update cache in background without blocking response
function updateCacheInBackground(cache, request) {
  fetch(request)
    .then((response) => {
      if (response.ok) {
        cache.put(request, response);
      }
    })
    .catch((error) => {
      console.log("[SW] Background cache update failed:", error);
    });
}

// Utility functions to identify request types
function isImageRequest(request) {
  const url = new URL(request.url);
  return /\.(jpg|jpeg|png|gif|webp|avif|svg|ico)$/i.test(url.pathname);
}

function isHTMLRequest(request) {
  const url = new URL(request.url);
  return url.pathname.endsWith(".html") || url.pathname === "/";
}

function isCSSRequest(request) {
  const url = new URL(request.url);
  return url.pathname.endsWith(".css");
}

function isJSRequest(request) {
  const url = new URL(request.url);
  return (
    url.pathname.endsWith(".js") ||
    url.pathname.endsWith(".jsx") ||
    url.pathname.endsWith(".ts") ||
    url.pathname.endsWith(".tsx")
  );
}

function isCacheable(request) {
  const url = new URL(request.url);
  const cacheableExtensions = [".css", ".js", ".json", ".xml", ".txt"];
  return cacheableExtensions.some((ext) => url.pathname.endsWith(ext));
}

// Background sync for form submissions
self.addEventListener("sync", (event) => {
  if (event.tag === "contact-form-sync") {
    event.waitUntil(syncContactForm());
  }
});

async function syncContactForm() {
  try {
    // Get pending form submissions from IndexedDB
    const pendingForms = await getPendingForms();

    for (const form of pendingForms) {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form.data),
      });

      if (response.ok) {
        await removePendingForm(form.id);
      }
    }
  } catch (error) {
    console.error("[SW] Background sync failed:", error);
  }
}

// Placeholder functions for IndexedDB operations
async function getPendingForms() {
  // Implementation would use IndexedDB to store offline form submissions
  return [];
}

async function removePendingForm(id) {
  // Implementation would remove form from IndexedDB after successful sync
}

// Push notification handling
self.addEventListener("push", (event) => {
  const options = {
    body: event.data
      ? event.data.text()
      : "Ada pesan baru dari Sewa Mobil Surabaya",
    icon: "/logo.png",
    badge: "/logo.png",
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1,
    },
    actions: [
      {
        action: "explore",
        title: "Lihat Armada",
        icon: "/logo.png",
      },
      {
        action: "close",
        title: "Tutup",
        icon: "/logo.png",
      },
    ],
  };

  event.waitUntil(
    self.registration.showNotification("Sewa Mobil Surabaya", options)
  );
});

// Notification click handling
self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  if (event.action === "explore") {
    event.waitUntil(clients.openWindow("/armada"));
  } else if (event.action === "close") {
    // Just close the notification
    return;
  } else {
    // Default action - open main page
    event.waitUntil(clients.openWindow("/"));
  }
});

// Message handling from main thread
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }

  if (event.data && event.data.type === "GET_VERSION") {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
});

console.log("[SW] Service Worker loaded successfully");
