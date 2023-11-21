// const cacheName = 'messenger-cache-v1';
// const urlsToCache = [
//   '/',
//   '/index.html',
//   '/static/css/main.chunk.css',
//   '/static/js/bundle.js',
//   '/static/js/0.chunk.js',
//   '/static/js/main.chunk.js',
// ];

// self.addEventListener('install', (event) => {
//   event.waitUntil(
//     caches.open(cacheName).then((cache) => {
//       return cache.addAll(urlsToCache);
//     })
//   );
// });

// self.addEventListener('fetch', (event) => {
//   event.respondWith(
//     caches.match(event.request).then((response) => {
//       return response || fetch(event.request);
//     })
//   );
// });
