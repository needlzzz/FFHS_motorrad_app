// import express, jsonwebtoken, bcryptjs and User model
const router = require("express").Router();
const Contact = require("../model/Contact");

const cookieParser = require('cookie-parser');
router.use(cookieParser()); // ensure server uses cookie-parser in order to parse cookies on incoming requests


// contact route POST
router.post("/submit", async (req, res) => {
    
    // create contact object with data from request body
    const contact = new Contact({
      name: req.body.name,
      email: req.body.email,
      comments: req.body.comments,
    });
  
    try {
      // save contact using async await (asynchronous process)
      const response = await contact.save();
      // write in console log that user has been created successfully
      console.log("Contact created successfully: ", response.name)
      // in case of success return the userId
      res.json({ error: null, data: { name: response.name } });
    } catch (error) {
      res.status(400).json({ error });
    }
  });

  module.exports = router;