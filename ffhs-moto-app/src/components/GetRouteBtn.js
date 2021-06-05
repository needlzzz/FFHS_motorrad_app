import React from 'react';
require('dotenv').config();

const GetRouteBtn = () => {
  // Script for making the API call

  const mapboxAccessToken = process.env.REACT_APP_MAPBOX_ACCESSTOKEN;

  let APIresponse;

  //'https://api.mapbox.com/directions/v5/mapbox/driving/8.302545064505125%2C46.97634644704135%3B8.138109268361632%2C46.98345689840207%3B8.023467410485722%2C46.9281284624702%3B8.023467410485722%2C46.86482591028306%3B8.069787353061145%2C46.81492255056756%3B8.124213285588866%2C46.79589955467398%3B8.190219203759227%2C46.86561765341676%3B8.234223149206173%2C46.890947268190814%3B8.303703063070174%2C46.97555633851931?alternatives=true&geometries=geojson&steps=true&access_token=pk.eyJ1IjoibmVlZGx6enoiLCJhIjoiY2ttZmRrNzlhMzQwazJxa251eHQxYzU4MiJ9.pTqsaTuK9eOK-WluAgU0Eg');

  // these are the route waypoints that will be sent in the URL to the mapbox API to get the route description
  let baseURL = 'https://api.mapbox.com/directions/v5/mapbox/driving/';
  let URLrouteZurichSporty =
    baseURL +
    '8.302545064505125%2C46.97634644704135%3B8.138109268361632%2C46.98345689840207%3B8.023467410485722%2C46.9281284624702%3B8.023467410485722%2C46.86482591028306%3B8.069787353061145%2C46.81492255056756%3B8.124213285588866%2C46.79589955467398%3B8.190219203759227%2C46.86561765341676%3B8.234223149206173%2C46.890947268190814%3B8.303703063070174%2C46.97555633851931?alternatives=true&geometries=geojson&steps=true&access_token=' +
    mapboxAccessToken;

  function whichRoute() {
    let dropdownValue = document.getElementById('routeTypeDropdown').value;

    switch (dropdownValue) {
      case 'sporty':
        console.log('this is the sporty case');
        URLrouteZurichSporty = baseURL + URLrouteZurichSporty;
        fetchDataFromAPI(URLrouteZurichSporty);
      case 'scenic':
        console.log('this is the scenic case');
        break;
    }

    /* if (dropdownValue == 'sporty') {
    //console.log('this routetype dropdown value worked!');
    //fetchDataFromAPI(URLrouteZurichSporty);
    return URLrouteZurichSporty;
  } else {
    console.log('this is the else');
  } */
  }

  //this function makes the GET request to the external API

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
        //addRoute(APIresponse);
        return data;
      })
      .catch((error) => {
        console.log(`This is the error-message: ${error}`);
      });
  }

  const sendDataToBackend = (APIresponse) => {
    //let backendURL = 'http://localhost:3000/api/bikeroutes/history'; // This is the backend URL for the userprofile route from roger 'http://localhost:3000/api/user';
    console.log('THIS IS SENDING IT!');
    fetch('http://localhost:3000/api/bikeroutes/history', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      credentials: 'include',

      body: JSON.stringify(APIresponse),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  async function asyncAPIandBackendCall() {
    try {
      //const routeEval = await whichRoute();
      const reponse1 = await fetchDataFromAPI();

      sendDataToBackend(reponse1);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div id='getRouteBtnContainer'>
      <button id='getRouteBtn' onClick={asyncAPIandBackendCall}>
        Get route
      </button>
    </div>
  );
};

export default GetRouteBtn;

//<button onClick={asyncAPIandBackendCall} string={fetchDataFromAPI}>
