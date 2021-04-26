// this file is used to execute the logi which will run, when a HTTP request matches this route

const router = require("express").Router();
const express = require("express");
const app = express();
app.use(express.json());
const BikeRouteCoordinates = require("../model/Bikeroutes");

router.get("/", (req, res) => {
  res.send("this is bikeroutes!");
});

// this is the route for post requests to /api/bikeroutes/history (check index.js)
router.post("/history", async (req, res) => {
  // this is some testdata to test the route until the real data from the external API call can be used
  /*  const route1 = new BikeRouteCoordinates({
    coordinates: [111111111111111.88, 111111111111111.99],
  }); */

  let data = req.body;
  console.log(data);

  try {
    // save coordinates using async await (asynchronous process)
    //const response = route1.save();
    // write in console log that coordinates have been saved successfully
    console.log(data, "User history saved!", route1.coordinates);
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;
