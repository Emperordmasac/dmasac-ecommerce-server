const admin = require("../firebase");

exports.authcheck = (req, res, next) => {
    //receive token
    console.log(req.headers);
    next();
};
