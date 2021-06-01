// import express
const router = require("express").Router();
const User = require("../model/User");
const Bikeroutes = require("../model/Bikeroutes");


// myProfile route GET
router.get("/", (req, res) => {
  //can be deleted  
  const userId = req.cookies.UserId;

  // 
  User.find({_id: userId}, {name: 1, email: 1, date: 1},(err, result) => {
  if(err)  {
    res.send(err);
    } else {
    res.send(result);
    }
  });
  
});

// myProfile route GET
router.get("/routes", (req, res) => {
  //const userId = req.cookies.UserId;
  
  // 
  Bikeroutes.find({userConnected: 'UserId=j%3A%2260aa8d5ec98ffd5086f1932b%22'}, {routes: 1},(err, result) => {
  if(err)  {
    res.send(err);
    } else {
    res.send(result);
    }
  });
  
});

module.exports = router;