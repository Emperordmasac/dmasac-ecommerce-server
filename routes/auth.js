// Import Statements
const express = require("express");

// Router variables
const router = express.Router();

// Controller Import
const { create_or_update_user } = require("../controllers/auth");

// Middlewares Import
const { authcheck } = require("../middlewares/auth");

// Endpoints
router.post("/create_or_update_user", authcheck, create_or_update_user);

// Export Statements
module.exports = router;
