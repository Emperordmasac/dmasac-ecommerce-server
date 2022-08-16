const admin = require("../firebase");

exports.authcheck = async (req, res, next) => {
    //receive token
    console.log(req.headers);
    try {
        const firebaseUser = await admin
            .auth()
            .verifyIdToken(req.headers.authtoken);
        console.log("FirebaseUser in authcheck", firebaseUser);
        req.user = firebaseUser;
        next();
    } catch (error) {
        console.log(error);
        res.staus(401).json({
            error: "Invalid || EXpired Token",
        });
    }
};
