const Product = require("../models/product");
const slugify = require("slugify");

exports.create = async (req, res) => {
    try {
        console.log(req.body);
        req.body.slug = slugify(req.body.title);
        const product = await new Product(req.body).save();
        res.json(product);
    } catch (error) {
        console.log(error);
        //res.status(400).send("error creating product. Try Again!");
        res.status(400).json({
            error: error.message,
        });
    }
};

exports.list = async (req, res) => {
    let products = await Product.find({});
    res.json(products);
};
