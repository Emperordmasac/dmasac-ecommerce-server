const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

//();

const subSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: "A Name is required",
            minlength: [2, "category name too short"],
            maxlength: [32, "Cstegory name too long"],
        },
        slug: {
            type: String,
            unique: true,
            lowercase: true,
            index: true,
        },
        parent: { type: ObjectId, ref: "Category", required: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Sub", subSchema);
