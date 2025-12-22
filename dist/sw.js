// Service Worker for essential caching
const CACHE_NAME = "sewa-mobil-v1";
const STATIC_CACHE = "static-v1";

// Essential resources to cache
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

// Install event - cache static assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => {
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        return self.clients.claim();
      })
  );
});

// Fetch event - simple caching
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

  // Simple cache-first strategy for static assets
  if (isStaticAsset(request)) {
    event.respondWith(handleStaticAsset(request));
  }
});

// Simple static asset handler
async function handleStaticAsset(request) {
  const cache = await caches.open(STATIC_CACHE);
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
    return new Response("Asset not available", { status: 404 });
  }
}

// Simple utility function for static assets
function isStaticAsset(request) {
  const url = new URL(request.url);
  const staticExtensions = [
    ".css",
    ".js",
    ".png",
    ".jpg",
    ".jpeg",
    ".webp",
    ".svg",
    ".ico",
    ".woff",
    ".woff2",
  ];
  return (
    staticExtensions.some((ext) => url.pathname.endsWith(ext)) ||
    url.pathname === "/"
  );
}
