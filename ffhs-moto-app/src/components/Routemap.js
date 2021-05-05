// import
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';

// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';

// create Map component
const Map = () => {
  mapboxgl.workerClass = MapboxWorker;
  mapboxgl.accessToken =
    'pk.eyJ1IjoibmVlZGx6enoiLCJhIjoiY2ttZmRuazByMHZlbDJwcDVic2l2ejlxayJ9.Et17UmFwk2GqHFiFTCUZow';
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

    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    return () => map.remove();
  }, []);

  return (
    <div>
      <div className='sidebar'>
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div className='map-container' ref={mapContainer} />
    </div>
  );
};

export default Map;
