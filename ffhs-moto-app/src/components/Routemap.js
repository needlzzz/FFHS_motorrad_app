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

import MapDirectionLayer, {
  APIresponse,
  fetchDataFromAPI,
} from './MapDirectionLayer';
import { MapDataContext } from './MapDataContext';

import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';

// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';

import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';

////// Static geojson file

const emptyRoute = [];

const routeEmmental = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'LineString',
        coordinates: [
          [7.794419451749358, 47.215691522640746],
          [7.850724382965238, 47.11672310018434],
          [7.838364763917848, 47.00258777430018],
          [7.794419451749358, 46.9388653097105],
          [7.444230245406693, 46.72936027399838],
          [7.794419451749358, 47.215691522640746],
        ],
      },
    },
  ],
};

const routeLucerne = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'LineString',
        coordinates: [
          [8.07769775390625, 47.16450869129573],
          [7.878570556640624, 47.11686892229326],
          [7.746734619140625, 47.07386310181414],
          [7.749481201171875, 46.96432220110901],
          [7.842864990234375, 46.91931732797351],
          [7.9046630859375, 46.89680070399431],
          [8.002166748046875, 46.94182449351122],
          [8.020019531249998, 46.832012719114765],
          [8.06121826171875, 46.81133924039194],
          [8.186187744140625, 46.83952837681947],
          [8.1903076171875, 46.86394700508323],
          [8.216400146484375, 46.880845705719146],
          [8.23699951171875, 46.90055413151483],
          [8.271331787109375, 46.95213711682888],
          [8.30291748046875, 46.98212617904094],
          [8.29742431640625, 47.04860437854606],
          [8.238372802734375, 47.09724013895744],
          [8.08868408203125, 47.16450869129573],
        ],
      },
    },
  ],
};

////// END

var directions = new MapboxDirections({
  accessToken: process.env.REACT_APP_MAPBOX_ACCESSTOKEN,
  unit: 'metric',
  profile: 'mapbox/driving',
});

var Draw = new MapboxDraw();

// create Map component
const Map = (props) => {
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

    map.addControl(directions, 'top-left');
    map.addControl(Draw, 'top-right');

    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    function loadmap() {
      map.on('click', function () {
        console.log('loadMap Function');
      });
    }

    map.on('load', function () {
      map.addSource('bikeroutes', {
        type: 'geojson',
        data: emptyRoute,
      });
      map.addLayer({
        id: 'bikeroutes',
        type: 'fill',
        source: 'bikeroutes', // reference the data source
        layout: {},
        paint: {
          'fill-color': '#0080ff', // blue color fill
          'fill-opacity': 0.5,
        },
      });
      // Add a black outline around the polygon.
      map.addLayer({
        id: 'outline',
        type: 'line',
        source: 'bikeroutes',
        layout: {},
        paint: {
          'line-color': '#000',
          'line-width': 3,
        },
      });
    });

    // Binding a click event to the emmentalRouteBtn to display the emmental route on the map
    let emmentalRouteBtn = document.getElementById('emmentalRouteBtn');
    emmentalRouteBtn.addEventListener('click', (e) => {
      map.getSource('bikeroutes').setData(routeEmmental);
    });

    let lucerneRouteBtn = document.getElementById('lucerneRouteBtn');
    lucerneRouteBtn.addEventListener('click', (e) => {
      map.getSource('bikeroutes').setData(routeLucerne);
    });

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
      <div> {APIresponse} </div>

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
          <MapDataContext.Provider value={APIresponse}>
            <GetRouteBtn />
            <DrawRouteBtn />
          </MapDataContext.Provider>
          <button id='emmentalRouteBtn'>Show emmental route</button>
          <button id='lucerneRouteBtn'>Show lucerne route</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Map;
