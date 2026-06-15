// Self-destroying service worker.
//
// The site previously shipped a workbox precaching service worker. This file
// replaces it at the same URL (/service-worker.js) so returning visitors whose
// browsers fetch it for an update get a worker that unregisters itself and
// clears all caches — preventing them from getting stuck on a stale cached
// version of the site. New visitors never register a service worker.
//
// Safe to delete once traffic has cycled through at least once.
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      try {
        const keys = await caches.keys();
        await Promise.all(keys.map((key) => caches.delete(key)));
        await self.registration.unregister();
        const clients = await self.clients.matchAll({ type: "window" });
        clients.forEach((client) => client.navigate(client.url));
      } catch (err) {
        // best-effort cleanup; ignore failures
      }
    })()
  );
});
