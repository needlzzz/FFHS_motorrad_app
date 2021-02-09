const cacheName = "v2";



//installation of the sw
//call Install event

self.addEventListener("install", (e) => {
  console.log("Service Worker: Installed");


      .then(() => {
        self.skipWaiting();
      })
  );
});

//activation of the sw
//call Activate event

self.addEventListener("activate", (e) => {
  console.log("Service Worker: Activated");
  //Remove unwanted caches
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            console.log("Service Worker: Clearing old cache");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

//call Fetch Event
self.addEventListener("fetch", (e) => {
  console.log("Service Worker: Fetching");
  e.respondWith(fetch(e.request).catch(() => caches.match(e.requestß)));
});
