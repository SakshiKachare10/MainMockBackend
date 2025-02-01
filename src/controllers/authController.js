const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.generateToken = (req, res) => {
  const payload = { adminId: 123, adminName: "Alice" };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "20m" });
  res.json({ token });
};