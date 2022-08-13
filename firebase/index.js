var admin = require("firebase-admin");

// var serviceAccount = require("path/to/serviceAccountKey.json");

var serviceAccount = require("../config/fbServiceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
