//i must find a way to save the requested coordinates from the openrouteservice API
//into a variable, which can then be sent to our backend and to the DB

//created 2 promises which will handled by the async function dowork()

//const { func } = require("@hapi/joi");

// let routeBtn = document.getElementById('routeBtn');

// routeBtn.addEventListener('click', () => {
//   console.log('button pressed');
//   //getRouteData();
//   /*   fetchDataFromAPI();
//   sendDataToBackend(); */
//   asyncAPIandBackendCall();
// });

//backend URL

let route1Zurich = {};
let route2Zurich;
let route1Lucerne;
let route2Lucerne;

//this function makes the GET request to the external API

function fetchDataFromAPI() {
  let URLroute1Zurich =
    'https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf6248b53c2e2b177c42258f8caf73f94745ae&start=8.681495,49.41461&end=8.687872,49.420318';

  return new Promise((resolve, reject) => {
    resolve(
      fetch(URLroute1Zurich, { method: 'GET' }).then((res) => {
        if (res.ok) {
          console.log('SUCCESS');
          return res.json();
        }
      })
    );
  })
    .then((data) => {
      route1Zurich = data;

      console.log(route1Zurich);
      return route1Zurich.bbox;
    })
    .catch((error) => {
      console.log(`This is the error-message: ${error}`);
    });
}

const sendDataToBackend = (route1Zurich) => {
  let backendURL = 'http://localhost:3000/api/bikeroutes/history';
  console.log('THIS IS SENDING IT!');
  fetch(backendURL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      coordinates: route1Zurich,
      //coordinates: [777755555555777, 8888855555558888],
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};

async function asyncAPIandBackendCall() {
  try {
    const reponse1 = await fetchDataFromAPI();
    console.log('dowork1');
    const response2 = sendDataToBackend(reponse1);
    console.log('dowork2');
  } catch (err) {
    console.log(err);
  }
}

export {
  fetchDataFromAPI,
  sendDataToBackend,
  asyncAPIandBackendCall,
  route1Zurich,
};

/* fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json)); */
// here belongs the code that sends the POST request to the /bikeroute route in the backend

//XML http request
/*const getRouteData = () => {
  return new Promise((resolve, reject) => {
    let openrouteXHR = new XMLHttpRequest();
    let url = "";
    let route1 =
      "https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf6248b53c2e2b177c42258f8caf73f94745ae&start=8.681495,49.41461&end=8.687872,49.420318";
    openrouteXHR.open("GET", route1);
    openrouteXHR.setRequestHeader(
      "Accept",
      "application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8"
    );
    openrouteXHR.send();
    openrouteXHR.onreadystatechange = () => {
      if (openrouteXHR.readyState === 4 && openrouteXHR.status === 200) {
        resolve(openrouteXHR.responseText);

      } else if (openrouteXHR.status >= 200) {
        reject(openrouteXHR.statusText);
        //console.log("not good");
      }
    };
  });
}; */
