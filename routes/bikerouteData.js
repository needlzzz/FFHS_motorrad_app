// this file is used to execute the logi which will run, when a HTTP request matches this route

const router = require("express").Router();
const express = require("express");
const app = express();
app.use(express.json());
const BikeRouteCoordinates = require("../model/Bikeroutes");

router.get("/", (req, res) => {
  res.send("this is bikeroutes!");
});

router.post("/history", async (req, res) => {
  const route1 = new BikeRouteCoordinates({
    coordinates: [1234.88, 12345.99],
  });

  try {
    const response = route1.save();
    console.log("User history saved!", route1.coordinates);
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;
