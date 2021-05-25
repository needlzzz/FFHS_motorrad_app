// import express
const router = require("express").Router();
const User = require("../model/User");


// myProfile route GET
router.get("/", (req, res) => {
  //can be deleted  
  const token2 = req.cookies.Authorization;
  console.log(`this is the profile.js ${token2}`)
  // 
  User.find({}, (err, result) => {
  if(err)  {
    res.send(err);
    } else {
    res.send(result);
    }
  });
  
});

module.exports = router;