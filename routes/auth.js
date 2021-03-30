const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const User = require("../model/User");

// validation
const { registerValidation, loginValidation } = require("../validation");

// register route
router.post("/register", async (req, res) => {
  // validate the user
  const { error } = registerValidation(req.body);

  // throw validation errors
  if (error) return res.status(400).json({ error: error.details[0].message });

  const isEmailExist = await User.findOne({ email: req.body.email });

  // throw error when email already registered
  if (isEmailExist)
    return res.status(400).json({ error: "Email already exists" });

  // generate a random complex string with complexity 10
  const salt = await bcrypt.genSalt(10);
  // generate hash password to a complex generated string
  const password = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password,
  });

  try {
    const savedUser = await user.save();
    // in case of success return the userId
    res.json({ error: null, data: { userId: savedUser._id } });
  } catch (error) {
    res.status(400).json({ error });
  }
});


// login route
router.post("/login", async (req, res) => {
  // validate the user i.e. the request body inputs email and password
  const { error } = loginValidation(req.body);

  // throw validation errors
  if (error) return res.status(400).json({ error: error.details[0].message });

  // check if email is available in db otherwise throw error
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).json({ error: "Email is wrong" });

  // process the password with bcrypt and compare with hash password. Throw error if password is wrong.
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res.status(400).json({ error: "Password is wrong" });

  // if no errors occurred, create token
  const token = jwt.sign(
    // payload data
    {
      name: user.name,
      id: user._id,
    },
    process.env.TOKEN_SECRET
  );

  res.header("auth-token", token).json({
    error: null,
    data: {
      token,
    },
  });
});

module.exports = router;