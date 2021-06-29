# FFHS_toeff_app

<h1>This is our FFHS school project.</h1>

---

<h2>Current state of the application:</h2>

- Login implemented
- JWT token implemented
- Map implemented with controls
- Display pre-defined routes mapped to buttons
- Get Route directions via external API call
- Backend with handlers implemented
- Running MongoDb using mongoose framework

<h2>Not yet working:</h2>

- Displaying route on map using the data from the external API call

---

mockups see here: https://ffhsrwm.invisionapp.com/freehand/WireFrame-Moto-Project-oRcGAEwCe

-----Service Worker-----
ServiceWorker has been implemented for index.html with sw_cached_pages.js and sw_main.js.
The sw_main.js registers the service worker, while the sw_cached_pages.js installs and activates the service worker.
Thanks to the service worker (and the cache-build-up), index.html can be viewed offline.
