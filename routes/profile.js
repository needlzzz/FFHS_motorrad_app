// import express
const router = require("express").Router();

// myProfile route GET
router.get("/", (req, res) => {
  res.json({
    error: null,
    data: {
      user: req.user,
    },
  });
});

module.exports = router;