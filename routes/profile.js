// import express
const router = require("express").Router();
const User = require("../model/User");


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

module.exports = router;