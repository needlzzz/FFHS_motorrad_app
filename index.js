//import express, mongoose and dotenv
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");


const app = express();
dotenv.config();

// connect to mongodb atlas
mongoose.connect(
  // refer to DB_Connect in .env and treat it as a environment variable
  process.env.DB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("connection to DB established")
);

// import routes
const authRoutes = require("./routes/auth");
const myProfileRoutes = require("./routes/profile");
const verifyToken = require("./routes/validate-token");

// middlewares
app.use(express.json()); // read request body as JSON object with body parser

// route middlewares
app.use("/api/user", authRoutes);
app.use("/api/profile", verifyToken, myProfileRoutes); //myProfile route protected with jwt token

// define port
app.listen(3000, () => console.log("server is running..."));