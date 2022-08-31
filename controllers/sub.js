const Sub = require("../models/sub");
const slugify = require("slugify");

exports.create = async (req, res) => {
    try {
        const { name } = req.body;
        const sub = await new Sub({
            name,
            slug: slugify(name),
        }).save();
        res.json(sub);
    } catch (error) {
        console.log(error);
        res.status(400).send("error creating sub_category. Try Again!");
    }
};

exports.list = async (req, res) =>
    res.json(await Sub.find({}).sort({ createdAt: -1 }).exec());

exports.read = async (req, res) => {
    let sub = await Sub.findOne({ slug: req.params.slug }).exec();
    res.json(sub);
};

exports.update = async (req, res) => {
    const { name } = req.body;
    try {
        const updated = await Sub.findOneAndUpdate(
            {
                slug: req.params.slug,
            },
            { name, slug: slugify(name) },
            { new: true }
        );
        res.json(updated);
    } catch (error) {
        res.status(400).send("error updating sub_category");
    }
};

exports.remove = async (req, res) => {
    try {
        let deleted = await Sub.findOneAndDelete({
            slug: req.params.slug,
        });
        res.json(deleted);
    } catch (error) {
        res.status(400).send("error deleting sub_category");
    }
};
