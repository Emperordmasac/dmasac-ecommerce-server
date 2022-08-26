// Import Statements
const express = require("express");

// Router variables
const router = express.Router();

// Controller Import
const {
    create,
    read,
    update,
    remove,
    list,
} = require("../controllers/category");

// Middlewares Import
const { authcheck, admincheck } = require("../middlewares/auth");

// Endpoints
router.post("/category", authcheck, admincheck, create);
router.get("/category", list);
router.get("/category", authcheck, admincheck, read);
router.put("/category/:slug", authcheck, admincheck, update);
router.post("/category/:slug", authcheck, admincheck, remove);

// Export Statements
module.exports = router;
