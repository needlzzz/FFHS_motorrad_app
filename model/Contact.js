//import mongoose
const mongoose = require("mongoose");

// create user schema and define collection "contact"
const contactSchema = new mongoose.Schema({
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
      unique: true,
      min: 6,
      max: 255,
    },
    // define object password and its properties
    comments: {
      type: String,
      required: true,
      min: 1,
      max: 1000,
    }, 
  }, 
  {
    collection: "contact"
  }
);

// export contact schema model as "contact"
module.exports = mongoose.model("Contact", contactSchema);