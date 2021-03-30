// import jsonwebtoken
const jwt = require("jsonwebtoken");

// middleware to validate token
const verifyToken = (req, res, next) => {
  // check for valid token from request header property and throw error if there is no token
  const token = req.header("auth-token");
  if (!token) return res.status(401).json({ error: "You must be logged in" });

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ error: "Token is not valid" });
  }
};

module.exports = verifyToken;