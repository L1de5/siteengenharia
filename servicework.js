var CACHE_NAME = 'static-v1';

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll([
        '/index.html',
        'css/creative.min.css',
        'css/font-awesome.min.css',
        'css/style.css',
        'font/fontaweome-webfont.eot',
        'font/fontaweome-webfont.ttf',
        'font/fontaweome-webfont.woff',
        'font/fontaweome-webfont.woff2',
        'font/fontello.eot',
        'font/fontello.svg',
        'font/fontello.ttf',
        'font/fontello.woff',
        'images/contact-image.jpg',
        'images/example-work01.jpg',
        'images/icons/icon-72x72.png',
        'images/icons/icon-96x96.png',
        'images/icons/icon-128x128.png',
        'images/icons/icon-144x144.png',
        'images/icons/icon-152x152.png',
        'images/icons/icon-192x192.png',
        'images/icons/icon-384x384.png',
        'images/icons/icon-512x512.png',
        '/cadastro.html',
        '/home.html',
        '/musica.html',
        '/perfil.html',
        '/senha.html',
        '/sobre.html',
        '/styles.css',
        '/manifest.json',
      ]);
    })
  )
});

self.addEventListener('activate', function activator(event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys
        .filter(function (key) {
          return key.indexOf(CACHE_NAME) !== 0;
        })
        .map(function (key) {
          return caches.delete(key);
        })
      );
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (cachedResponse) {
      return cachedResponse || fetch(event.request);
    })
  );
});