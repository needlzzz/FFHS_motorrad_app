
<h1>FFHS school project - motoapp</h1>

---

<h2>Tech Stack used for this project:</h2> <br>
MERN Stack

---

<h2>What does this application do? </h2><br>
Users can sign up and get access to a map, that shows popular motorcycle routes.


---

<h2>Current state of the application:</h2>

- User registration implemented
- Login implemented
- JWT token implemented
- Map implemented with controls
- Display pre-defined routes mapped to buttons
- Get Route directions via external API call
- Backend with handlers implemented
- Running MongoDb using mongoose framework
- Persisting data to MongoDb

<h2>Not yet implemented:</h2>

- Displaying route on map using the data from the external API call
- Final styling of the frontend
- Displaying route information under user profile

---


<h2>Installation with docker image</h2>

<ul>
    <li>Clone repo</li>
    <li>Make sure you are in the root folder of the project - Build image with <b>docker build -t marc/backend</b> (or whatever name you wanna use) </li>
    <li> <b>cd ffhs-moto-app</b> (that is where the frontend REACT application is)</li>
    <li> <b>docker build -t marc/frontend</b> (or whatever name you wanna use) </li>
    <li> Now that both images have been built, you can run them with <b>docker-compose up</b> </li>
    <li>Once everything is running, you can start the browser with <b>http://localhost:2000/</b></li>
</ul>

<h2>Regular installation on local machine</h2>

<ul>
    <li>Make sure you are in the root folder of the project <b>npm install</b></li> 
    <li><b>cd ffhs-moto-app</b> (that is where the frontend REACT application is)</li>
    <li>npm install</li>
    <li>Start the REACT application with <b>npm start</b> (Make sure you are in ffhs-moto-app folder of the project)</li>
    <li>Start the Backend with <b>npm start</b></li>
    <li>Open browser with <b>http://localhost:2000/</b>
</ul>



<h2>Service Worker</h2>
ServiceWorker has been implemented for index.html with sw_cached_pages.js and sw_main.js.
The sw_main.js registers the service worker, while the sw_cached_pages.js installs and activates the service worker.
Thanks to the service worker (and the cache-build-up), index.html can be viewed offline.

<h2>Mockups</h2>
The mockups can be found here: https://ffhsrwm.invisionapp.com/freehand/WireFrame-Moto-Project-oRcGAEwCe

