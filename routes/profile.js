// import express
const router = require("express").Router();
const User = require("../model/User");


// myProfile route GET
router.get("/", (req, res) => {
    const token2 = req.cookies.Authorization;
    console.log(`this is the ${token2}`)
    User.find({}, (err, result) => {
    if(err)  {
      res.send(err);
    } else {
      res.send(result);
    }
  });
  // res.json({
  //   error: null,
  //   data: {
  //     user: req.user,
  //   },
  // });
});

// // myProfile route GET
// router.get("/", (req, res) => {
//   res.json({
//     error: null,
//     data: {
//       user: req.user,
//     },
//   });
// });

module.exports = router;