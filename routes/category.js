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
    getSubs,
} = require("../controllers/category");

// Middlewares Import
const { authcheck, admincheck } = require("../middlewares/auth");

// Endpoints
router.post("/category", authcheck, admincheck, create);
router.get("/categories", list);
router.get("/category/:slug", read);
router.put("/category/:slug", authcheck, admincheck, update);
router.delete("/category/:slug", authcheck, admincheck, remove);
router.get("/category/subs/:_id", getSubs);

// Export Statements
module.exports = router;
