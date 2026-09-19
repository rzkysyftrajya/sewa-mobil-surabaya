// Service Worker - DISABLED FOR GOOGLE ADS COMPLIANCE
// All service worker functionality removed to prevent request interception

// No caching, no fetch interception, no background processing
// This ensures Google Ads scripts are not blocked or modified

// Empty event listeners to prevent any service worker behavior
self.addEventListener("install", (event) => {
  // Service worker disabled - no installation
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  // Service worker disabled - no activation
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  // Service worker disabled - no fetch interception
  // Pass through all requests without modification
});

// No caching, no response modification, no request blocking
