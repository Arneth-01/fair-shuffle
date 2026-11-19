// Minimaler Service Worker – nötig, damit Chrome die Seite als App installieren lässt.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => {
  e.respondWith(fetch(e.request));
});
