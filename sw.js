// Service Worker: holt die App-Dateien immer frisch von GitHub (keine 10 Minuten Wartezeit nach Updates)
// und ist nötig, damit Chrome die Seite als App installieren lässt.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== self.location.origin) return; // Spotify-Anfragen nicht anfassen
  e.respondWith(fetch(e.request, { cache: "no-store" }).catch(() => fetch(e.request)));
});
