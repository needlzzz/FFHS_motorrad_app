// this file is used to execute the logi which will run, when a HTTP request matches this route

const router = require('express').Router();

const BikeRouteCoordinates = require('../model/Bikeroutes');

router.get('/', (req, res) => {
  res.send('this is bikeroutes!');
});




// this is the route for post requests to /api/bikeroutes/history (check index.js)
router.post('/history', async (req, res) => {
  // this is some testdata to test the route until the real data from the external API call can be used
  /*  const route1 = new BikeRouteCoordinates({
    coordinates: [111111111111111.88, 111111111111111.99],
  }); */
  //console.log('REQUEST BODY: ', req.body.waypoints);
  
  
  
  const coordinatesRequest = new BikeRouteCoordinates({
    routes: req.body.routes,
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

    /* console.log(
      coordinatesRequest,
      'User history saved!',
      coordinatesRequest.save()
    ); */
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;

/* try {
  // save user using async await (asynchronous process)
  const response = await user.save();
  // write in console log that user has been created successfully
  console.log('User created successfully: ', response.name);
  // in case of success return the userId
  res.json({ error: null, data: { userId: response._id } });
} catch (error) {
  res.status(400).json({ error });
} */
