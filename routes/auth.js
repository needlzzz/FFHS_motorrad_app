// import express, jsonwebtoken, bcryptjs and User model
const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../model/User");

const cookieParser = require('cookie-parser');
router.use(cookieParser()); // ensure server uses cookie-parser in order to parse cookies on incoming requests

// import registerValidation and loginValidation from validation.js
const { registerValidation} = require("../validation");


// register route POST
router.post("/register", async (req, res) => {
  // validate registration data (validation.js) and throw error details from JOI validation object (if any)
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  // check availability of email in request body in mongodb and throw error if email is already registered
  const emailChecker = await User.findOne({ email: req.body.email });
  if (emailChecker)
    return res.status(400).json({ error: "Email address is already used by another user" });


  // generate a random complex string with complexity 10 and generate has password
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(req.body.password, salt);

  // create user object with data from request body
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password,
  });

  try {
    // save user using async await (asynchronous process)
    const response = await user.save();
    // write in console log that user has been created successfully
    console.log("User created successfully: ", response.name)
    // in case of success return the userId
    res.json({ error: null, data: { userId: response._id, name: response.name, email: response.email } });
  } catch (error) {
    res.status(400).json({ error });
  }
});


// login route POST
router.post("/login", async (req, res) => {

  // check availability of email in request body in mongodb and throw error if email/user is not available
  const user = await User.findOne({ email: req.body.email });
  if (!user) 
    return res.status(400).json({ error: "This email address does not exist" });

  // process the password with bcrypt and compare with hash password. Throw error if password is wrong.
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res.status(400).json({ error: "Wrong password, try again" });

  // if no errors occurred, create jwt token from payload data and secret key (.env)
  const token = jwt.sign(
    {
      id: user._id,
      name: user.name,  
    },
    process.env.TOKEN_SECRET
  );
  
  // save token in cookie with secure and httpOnly = true (XSS vulnerability)
  res.cookie('Authorization', token, {
    secure: true,
    httpOnly: true,
  });  

  // save token in header
  res.header("auth-token", token).json({
    error: null,
    data: {
      token,
    },
  });
  
  
});

module.exports = router;