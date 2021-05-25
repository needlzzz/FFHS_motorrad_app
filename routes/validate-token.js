// import jsonwebtoken
const jwt = require("jsonwebtoken");

// middleware to validate token
const verifyToken = (req, res, next) => {
  // check for valid token from request header property and throw error if there is no token
  const token = req.cookies.Authorization || '';
  //const token = req.header("auth-token");
  
  try {
    if (!token) 
      return res.status(401).json({ error: "You must be logged in" });
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    console.log(req.user)
    next();
  } catch (err) {
    res.status(400).json({ error: "Token is not valid" });
  }
};

module.exports = verifyToken;