// this file is used to execute the logic which will run, when a HTTP request matches this route

const router = require('express').Router();

const BikeRouteCoordinates = require('../model/Bikeroutes');

router.get('/', (req, res) => {
  res.send('this is bikeroutes!');
});

// this is the route for post requests to /api/bikeroutes/history (check index.js)
router.post('/history', async (req, res) => {
  const coordinatesRequest = new BikeRouteCoordinates({
    distance: req.body.routes[0].distance,
    duration: req.body.routes[0].duration,
    waypoints: req.body.waypoints,
    userConnected: req.body.userConnected,
  });
  /*   let data = req.body;
  console.log(data); */

  try {
    // save coordinates using async await (asynchronous process)
    //const response = route1.save();
    // write in console log that coordinates have been saved successfully

    const response = await coordinatesRequest.save();
    console.log('User coordinates saved successfully: ', response);
    res.json({ error: null, data: { coordinates: response.waypoints } });
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;
