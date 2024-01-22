self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('my-scripts').then((cache) => {
      return cache.addAll([
        'https://cdn.jsdelivr.net/gh/eq89/edm/alert.js',
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
