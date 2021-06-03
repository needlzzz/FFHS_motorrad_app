import { createContext } from 'react';

let APIresponse = 'context string';

////// Fetdata from API func

function fetchDataFromAPI() {
  // User selection route variables

  //whichRoute();
  const URL =
    'https://api.mapbox.com/directions/v5/mapbox/driving/8.302545064505125%2C46.97634644704135%3B8.138109268361632%2C46.98345689840207%3B8.023467410485722%2C46.9281284624702%3B8.023467410485722%2C46.86482591028306%3B8.069787353061145%2C46.81492255056756%3B8.124213285588866%2C46.79589955467398%3B8.190219203759227%2C46.86561765341676%3B8.234223149206173%2C46.890947268190814%3B8.303703063070174%2C46.97555633851931?alternatives=true&geometries=geojson&steps=true&access_token=pk.eyJ1IjoibmVlZGx6enoiLCJhIjoiY2ttZmRrNzlhMzQwazJxa251eHQxYzU4MiJ9.pTqsaTuK9eOK-WluAgU0Eg';

  //'https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf6248b53c2e2b177c42258f8caf73f94745ae&start=8.681495,49.41461&end=8.687872,49.420318';
  return new Promise((resolve, reject) => {
    resolve(
      fetch(URL, { method: 'GET' }).then((res) => {
        if (res.ok) {
          console.log('SUCCESS');

          return res.json();
        }
      })
    );
  })
    .then((data) => {
      APIresponse = data;

      console.log(APIresponse);

      //addRoute(APIresponse);
      return APIresponse;
    })
    .catch((error) => {
      console.log(`This is the error-message: ${error}`);
    });
}

/* async function storeAPIresponse() {
  try {
    let APIres = await fetchDataFromAPI();
    console.log(APIres);
  } catch (err) {
    console.log(err);
  }
} */

////// End

export const MapDataContext = createContext(null);
