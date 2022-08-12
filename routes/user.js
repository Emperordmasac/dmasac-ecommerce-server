// Import Statements
const express = require("express");

// Router variables
const router = express.Router();

// Endpoints
router.get("/user", (req, res) => {
    res.json({
        data: "The user API endpoint",
    });
});

// Export Statements
module.exports = router;
