const admin = require("../firebase");
const User = require("../models/user");

exports.authcheck = async (req, res, next) => {
    //receive token
    console.log(req.headers);
    // idToken comes from the client app
    try {
        const firebaseUser = await admin
            .auth()
            .verifyIdToken(req.headers.authtoken);
        console.log("FirebaseUser in authcheck", firebaseUser);
        req.user = firebaseUser;
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({
            error: "Invalid || EXpired Token",
        });
    }
};

exports.admincheck = async (req, res, next) => {
    const { email } = req.user;

    const adminUser = await User.findOne({ email }).exec();

    if (adminUser.role !== "admin") {
        res.status(403).json({
            error: "Admin Resource. ACCESS DENIED",
        });
    } else {
        next();
    }
};
