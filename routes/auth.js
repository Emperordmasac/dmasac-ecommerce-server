// Import Statements
const express = require("express");

// Router variables
const router = express.Router();

// Controller Import
const { create_or_update_user, current_user } = require("../controllers/auth");

// Middlewares Import
const { authcheck, admincheck } = require("../middlewares/auth");

// Endpoints
router.post("/create_or_update_user", authcheck, create_or_update_user);
router.post("/current_user", authcheck, current_user);
router.post("/current_admin", authcheck, admincheck, current_user);

// Export Statements
module.exports = router;
