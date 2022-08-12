// Import Statements
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const { readdirSync } = require("fs");

require("dotenv").config();

//App
const app = express();

// Database
mongoose
    .connect(process.env.DATABASE)
    .then(() => console.log("DATABASE CONNECTED"))
    .catch((error) => {
        console.log("DATABASE CONNECTION ERROR --->", error);
    });

// Middleware
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());

// Routes Middleware
readdirSync("./routes").map((route) =>
    app.use("/api", require("./routes/" + route))
);

// Port
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`SERVER IS RUNNIN ON PORT ${port}`);
});
