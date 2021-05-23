//import mongoose
const mongoose = require('mongoose');

// create user schema and define collection "users"
const userSchema = new mongoose.Schema(
  {
    // define object name and its properties
    name: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
    // define object email and its properties
    email: {
      type: String,
      required: true,
      uniqure: true,
      min: 6,
      max: 255,
    },
    // define object password and its properties
    password: {
      type: String,
      required: true,
      min: 6,
      max: 1024,
    },
    // define object date
    date: {
      type: Date,
      default: Date.now,
    },
    // This is for adding the coordinates data to the user schema
    /*     routeData: {
      type: Object,
      unrequire: true, 
    },*/
  },
  {
    collection: 'users',
  }
);

// export user schema model as "User"
module.exports = mongoose.model('User', userSchema);
