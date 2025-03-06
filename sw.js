const CACHE_NAME = 'calendario-casa-do-mar-v1';
const ASSETS = [
  '/calendario-casa-do-mar/',
  '/calendario-casa-do-mar/index.html',
  '/calendario-casa-do-mar/styles.css',
  '/calendario-casa-do-mar/script.js',
  '/calendario-casa-do-mar/icon-192x192.png',
  '/calendario-casa-do-mar/icon-512x512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
