const express = require("express");
const { generateToken } = require("../controllers/authController");
const router = express.Router();

router.post("/generate/token", generateToken);

module.exports = router;