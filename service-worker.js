var version = "2"
var cacheName = 'gridpath-pwa';
var filesToCache = [
  '/gridpath/',
  '/gridpath/index.html',
  '/gridpath/css/main.css',
  '/gridpath/js/index.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});