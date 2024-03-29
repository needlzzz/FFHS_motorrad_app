import { WAYPOINTS } from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import React, { useState } from 'react';
import ReactMapGl, { Marker } from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
import * as route1 from '../mapdata/route1.json';

export default function Routemap() {
  const [viewport, setViewport] = useState({
    latitude: 8.9999,
    longitude: 9.54553,
    width: '100vw',
    height: '100vh',
    zoom: 10,
  });

  const map = new mapboxgl.Map({
    container: mapContainer.,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-122.486052, 37.830348],
    zoom: 15,
  });

  map.on('load', function () {
    map.addSource('route', {
      type: 'geojson',
      data: {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: [
            [-122.483696, 37.833818],
            [-122.483482, 37.833174],
            [-122.483396, 37.8327],
            [-122.483568, 37.832056],
            [-122.48404, 37.831141],
            [-122.48404, 37.830497],
            [-122.483482, 37.82992],
            [-122.483568, 37.829548],
            [-122.48507, 37.829446],
            [-122.4861, 37.828802],
            [-122.486958, 37.82931],
            [-122.487001, 37.830802],
            [-122.487516, 37.831683],
            [-122.488031, 37.832158],
            [-122.488889, 37.832971],
            [-122.489876, 37.832632],
            [-122.490434, 37.832937],
            [-122.49125, 37.832429],
            [-122.491636, 37.832564],
            [-122.492237, 37.833378],
            [-122.493782, 37.833683],
          ],
        },
      },
    });
    map.addLayer({
      id: 'route',
      type: 'line',
      source: 'route',
      layout: {
        'line-join': 'round',
        'line-cap': 'round',
      },
      paint: {
        'line-color': '#888',
        'line-width': 8,
      },
    });
  });

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
          <button id='routeBtn'>Get route!</button>
          <button>Draw route</button>
        </div>
      </div>
    </React.Fragment>
  );
}
