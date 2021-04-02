//import mongoose
const mongoose = require("mongoose");

// create user schema and define collection "users"
const bikeroutesSchema = new mongoose.Schema(
  {
    coordinates: {
      type: Float32Array,
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
