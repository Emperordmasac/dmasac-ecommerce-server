// Import Statements
const express = require("express");

// Controller Import
const { create_or_update_user } = require("../controllers/auth");

// Router variables
const router = express.Router();

// Endpoints
router.get("/create_or_update_user", create_or_update_user);

// Export Statements
module.exports = router;
