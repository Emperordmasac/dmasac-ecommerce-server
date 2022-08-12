// Import Statements
const express = require("express");

// Router variables
const router = express.Router();

// Endpoints
router.get("/create_or_update_user", (req, res) => {
    res.json({
        data: "The create_or_update_user API endpoint",
    });
});

// Export Statements
module.exports = router;
