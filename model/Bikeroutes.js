//this file is used to define the schema for the bikeroute coordinates and the associated model

//import mongoose
const { number, array } = require('@hapi/joi');
const mongoose = require('mongoose');

// create user schema and define collection "users"
const bikeroutesSchema = new mongoose.Schema(
  {
    waypoints: {
      type: Array,
      required: true,
    },
    routes: {
      type: Array,
      required: true,
    },

    date: {
      type: Date,
      default: Date.now,
    },
    userConnected: {
      type: String,
    }
  },
  {
    collection: 'bikeroutes',
  }
);

//create model
const BikeRouteCoordinates = mongoose.model(
  'BikeRouteCoordinates',
  bikeroutesSchema
);

//export model called "BikeRouteCoordinates" with the integrated schema "bikeroutesSchema"
module.exports = mongoose.model('BikeRouteCoordinates', bikeroutesSchema);
