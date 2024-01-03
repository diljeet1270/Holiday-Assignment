const jwt = require("jsonwebtoken");

const generateToken = (id, email) => {
  const payload = {
    id: id,
    email: email,
  };
  return jwt.sign(payload, "your_secret_key", { expiresIn: "1h" });
};
const verifyToken = (req, res, next) => {
  let token = req.headers["authorization"];
  token = token ? token.split(" ") : "";
  token = token[1] ? token[1] : "";
  console.log(".......token", token);
  if (!token) {
    return res.status(403).json({
      status: "error",
      message: "Token not provided",
      data: null,
    });
  }

  jwt.verify(token, "your_secret_key", (err, decoded) => {
    if (err) {
      return res.status(401).json({ 
        status: 'error',
        message: "Invalid token login again",
        data: null 
    });
    }
    req.user = decoded;
    next();
  });
};

module.exports = {
  generateToken,
  verifyToken,
};
