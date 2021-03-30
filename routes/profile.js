// import express
const router = require("express").Router();

// myProfile route GET
router.get("/", (req, res) => {
  res.json({
    error: null,
    data: {
      title: "My profile",
      content: "profile content",
      user: req.user,
    },
  });
});

module.exports = router;