// Simple service worker for offline use.
// Files in /_next/static/ have a hash in the name and never change: use the cache first.
// Everything else (pages, images, data): try the network first, use the cache when offline.
// So a new deploy is seen at once, and old files are never stuck.
// Change the version to clear old caches after a big change.
const CACHE = "hubertus-v2";

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.add("/")));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET" || new URL(request.url).origin !== self.location.origin) return;

  if (new URL(request.url).pathname.startsWith("/_next/static/")) {
    event.respondWith(
      caches.match(request).then((cached) => cached || fetch(request).then((response) => saveCopy(request, response)))
    );
    return;
  }

  event.respondWith(
    fetch(request)
      .then((response) => saveCopy(request, response))
      .catch(() =>
        caches.match(request).then((cached) => cached || (request.mode === "navigate" ? caches.match("/") : undefined))
      )
  );
});

function saveCopy(request, response) {
  if (response.ok) {
    const copy = response.clone();
    caches.open(CACHE).then((cache) => cache.put(request, copy));
  }
  return response;
}
