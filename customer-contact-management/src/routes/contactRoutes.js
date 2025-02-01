const express = require("express");
const { identifyContact } = require("../controllers/contactController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/identify", identifyContact);
router.get("/search", authMiddleware, identifyContact); // Modify as needed
router.put("/contacts/:contactId", authMiddleware, identifyContact); // Modify as needed
router.delete("/contacts/:contactId", authMiddleware, identifyContact); // Modify as needed

module.exports = router;