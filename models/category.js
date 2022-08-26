const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: "A Name is required",
            minlength: [3, "category name too short"],
            maxlength: [32, "Cstegory name too long"],
        },
        slug: {
            type: String,
            unique: true,
            lowercase: true,
            index: true,
        },
    },
    { timestamps }
);

module.exports = mongoose.nodel("Category", categorySchema);
