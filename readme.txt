This is our FFHS school project. 


mockups see here: https://ffhsrwm.invisionapp.com/freehand/WireFrame-Moto-Project-oRcGAEwCe


-----How to ------

.gitignore contains the line that excludes the node_modules repository from being pushed.
This is done because the folder can be very heavy, 
and it would cause the pushes to be very long, 
and not up-to-date with the server.

if the project is to be run locally, run npm i before ng serve.

Hint: see all version of installed packages: npm ls --depth=0

-----Service Worker-----
ServiceWorker has been implemented for index.html with sw_cached_pages.js and sw_main.js. 
The sw_main.js registers the service worker, while the sw_cached_pages.js installs and activates the service worker. 
Thanks to the service worker (and the cache-build-up), index.html can be viewed offline.


----structure and how auth works----
package.json: define start index.js such that it can be started by npm start
index.js: Express sw_main
routes: define different routes middleware
.env: since db URL is explicit configure it via environment variable (dotenv package installed)
model / User.js: create User model-schema for User collection, i.e. how user model and proeprties should be

