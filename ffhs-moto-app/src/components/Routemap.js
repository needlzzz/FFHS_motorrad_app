import React, {
  useRef,
  useEffect,
  useState,
  useContext,
  useCallback,
} from 'react';
import DrawRouteBtn from './DrawRouteBtn';
import GetRouteBtn from './GetRouteBtn';
// This library is for adding HTML-like js script files to a REACT component
import ScriptTag from 'react-script-tag';
import ReactGL, { Layer } from 'react-map-gl';
import DeckGL, { GeoJsonLayer, ArcLayer } from 'deck.gl';

import MapDirectionLayer from './MapDirectionLayer';

import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';

// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';

//mapbox directions code block

import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';

var directions = new MapboxDirections({
  accessToken: process.env.REACT_APP_MAPBOX_ACCESSTOKEN,
  unit: 'metric',
  profile: 'mapbox/driving',
});

var Draw = new MapboxDraw();

// create Map component
const Map = () => {
  mapboxgl.workerClass = MapboxWorker;
  mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESSTOKEN;
  const mapContainer = useRef();
  const [lng, setLng] = useState(8.490364469212963);
  const [lat, setLat] = useState(47.388359402434524);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    });

    /////////////// API Calls Codeblock

    /////////////// End API Calls code block

    map.addControl(directions, 'top-left');
    map.addControl(Draw, 'top-right');

    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    map.on('load', function () {
      //fetchDataFromAPI();
      // ALL YOUR APPLICATION CODE
    });

    // Create GeoJsonLayer

    /////
    // Draw the Map Matching route as a new layer on the map

    function addRoute(coords) {
      console.log('this is the addroute func');
      // If a route is already loaded, remove it
      if (map.getSource('route')) {
        map.removeLayer('route');
        map.removeSource('route');
      } else {
        // Add a new layer to the map
        map.addLayer({
          id: 'route',
          type: 'line',
          source: 'apiresponse',
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: {},
            geometry: coords,
          },

          layout: {
            'line-join': 'round',
            'line-cap': 'round',
          },
          paint: {
            'line-color': '#03AA46',
            'line-width': 8,
            'line-opacity': 0.8,
          },
        });
      }
    }

    return () => map.remove();
  }, []);

  const initialView = {
    latitude: 51.47,
    longitude: 0.45,
    zoom: 4,
    bearing: 0,
    pitch: 30,
  };

  return (
    <React.Fragment>
      <div id='mapboxgl-container'>
        <div className='map-container' ref={mapContainer} />
      </div>

      <div className='dropdownContainer'>
        <select>
          <option selected disabled>
            --- Choose your route type ---
          </option>
          <option>Sporty</option>
          <option>Scenic</option>
        </select>

        <select>
          <option selected disabled>
            --- Choose your area ---
          </option>
          <option>Berne Area</option>
          <option>Lucerne area</option>
        </select>
        <div>
          <GetRouteBtn />
          <DrawRouteBtn />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Map;
