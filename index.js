//import express, mongoose and dotenv
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require('cookie-parser');
const cors = require("cors");


const db = mongoose.connection;


const app = express();



dotenv.config();

// connect to mongodb atlas
mongoose.connect(
  process.env.DB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("connected to DB")
);

// error handling for db connection error
db.on("error", console.error.bind(console, "connection error: "));
// once the db connection is established, the callback function needs to be called -> db.once('open', )....

// import routes
const authRoutes = require("./routes/auth");
const myProfileRoutes = require("./routes/profile");
const verifyToken = require("./routes/validate-token");
const bikerouteData = require("./routes/bikerouteData");

// middlewares
app.use(express.json()); // read request body as JSON object with body parser
app.use(cors()); // cors is for disabling CORS security policy
app.use(cookieParser()); // parse cookies on incoming requests

// route middlewares
app.use("/api/user", authRoutes);
app.use("/api/profile", verifyToken, myProfileRoutes); //myProfile route protected with jwt token
app.use("/api/bikeroutes", bikerouteData);

// define port
const PORT = 3000
app.listen(PORT, () => console.log(`server running at ${PORT}`));

//this is to test if the post method sends the request body to the backend and if the backend can handle it
app.post("/", (req, res) => {
  console.log(req.body);
  res.send("this is the test post method");
});
