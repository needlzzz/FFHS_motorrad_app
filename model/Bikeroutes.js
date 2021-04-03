//this file is used to define the schema for the bikeroute coordinates and the associated model

//import mongoose
const { number, array } = require("@hapi/joi");
const mongoose = require("mongoose");

// create user schema and define collection "users"
const bikeroutesSchema = new mongoose.Schema(
  {
    coordinates: {
      type: Array,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "bikeroutes",
  }
);

//create model
const BikeRouteCoordinates = mongoose.model(
  "BikeRouteCoordinates",
  bikeroutesSchema
);

//create test document
const bikeRoute1 = new BikeRouteCoordinates({
  coordinates: [1234.88, 12345.99],
});

//calling the .save methid, saves the newly created "bikeRoute1" object to the DB
bikeRoute1.save((error, bikeRoute1) => {
  if (error) return console.error(error);
});

//export model called "BikeRouteCoordinates" with the integrated schema "bikeroutesSchema"
module.exports = mongoose.model("BikeRouteCoordinates", bikeroutesSchema);
