const admin = require("firebase-admin");

const serviceAccount = require("./scrapproductos-firebase.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://scrapproductos.firebaseio.com"
});


const firestore = admin.firestore()

module.exports = firestore