This is our FFHS school project.


mockups see here: https://ffhsrwm.invisionapp.com/freehand/WireFrame-Moto-Project-oRcGAEwCe


-----Service Worker-----
ServiceWorker has been implemented for index.html with sw_cached_pages.js and sw_main.js. 
The sw_main.js registers the service worker, while the sw_cached_pages.js installs and activates the service worker, the cacheAssets are assigned manually. 
Thanks to the service worker (and the cache-build-up), index.html can be viewed offline.
Alternatively, sw_cached_all caches assets automatically.

