const { statusCodes } = require("../constants/statuscodes");
const jwt = require("jsonwebtoken");

const validateUser = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    res
      .status(statusCodes.FORBIDDEN)
      .json({ message: "Access token is required!" });
  } else {
    // check if token matches
    const isMatch = jwt.verify(token, process.env.JWT_SECRET);
    if (!isMatch) {
      res
        .status(statusCodes.UNAUTHORIZED)
        .json({ message: "Invalid or incorrect token" });
    } else {
      next();
    }
  }
  next();
};

module.exports = { validateUser };
