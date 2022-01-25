const CACHE_NAME = 'offline';
const OFFLINE_URL = '/index.html';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/components/header.js',
        '/components/content.js',
        '/components/dankRater.js',
        '/components/dankDropdownInput.js',
        '/components/loadingSpinner.js',
        '/components/sidescroller.js',
        '/components/card.js',
        '/css/main.css',
        '/img/blue_dream.png',
        '/img/icons-192.png',
        '/img/icons-512.png',
        '/img/weed1.png',
        '/js/API2.js',
        '/js/main.js',
        '/js/dispatcher.js',
        '/js/userManager.js',
        '/js/viewManager.js',
        '/views/404View.js',
        '/views/userView.js',
        '/views/mapView.js',
        '/views/verifyAddressView.js',
        '/views/despensaryView.js',
        '/views/dankTestView.js',
        '/views/editProfileView.js',
        '/views/editDispensaryView.js',
        '/views/exploreView.js',
        '/views/exploreSubView.js',
        '/index.html'
      ]);
    })
  );
});

self.addEventListener('activate', (event) => {
  console.log('[ServiceWorker] Activate');
  event.waitUntil((async () => {
    // Enable navigation preload if it's supported.
    // See https://developers.google.com/web/updates/2017/02/navigation-preload
    if ('navigationPreload' in self.registration) {
      await self.registration.navigationPreload.enable();
    }
  })());

  // Tell the active service worker to take control of the page immediately.
  self.clients.claim();
});

self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request).then(res => {
            const resClone = res.clone();
            caches
                .open("v1")
                .then(cache => {   
                  console.log(cache)
                    cache.put(event.request, resClone);
                });
            return res;
        }).catch(err => caches.match(event.request).then(res => res))
    );
});

