try {
  const errorGranualityLevel = 1;

  const admin = require("firebase-admin");
  const functions = require("firebase-functions");

  const serviceAdminAccount = require("./adminAccountKey.json");

  admin.initializeApp({
    credential: admin.credential.cert(serviceAdminAccount),
    databaseURL: "https://net-pl-default-rtdb.europe-west1.firebasedatabase.app",
  });

  const firestore = admin.firestore();

  exports.userAction = functions.region("europe-central2").https.onRequest({
    cors: true,
  }, async (req, res) => {
    if (errorGranualityLevel >= 1) console.log("errorGranualityLevel: ", errorGranualityLevel);

    console.log("req", req);

    const requestOrigin = req.headers.origin;
    res.set("Access-Control-Allow-Origin", requestOrigin);
    res.set("Access-Control-Allow-Methods", "GET, POST");
    res.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

    console.log(req.body);
    const reqBodyJson = JSON.parse(req.body);

    const idToken = req.headers &&
      req.headers.authorization &&
      req.headers.authorization.split("Bearer ")[1];

    if (!idToken) {
      return res.status(200).send({
        "status": "Unauthorized",
      });
    }

    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const uid = decodedToken.uid;

    const actionsPerformed = [];

    console.log("reqBodyJson.action == \"login\"", reqBodyJson.action == "login");
    console.log("reqBodyJson.payload", reqBodyJson.payload);
    if (reqBodyJson.action == "login" && reqBodyJson.payload && reqBodyJson.payload.userData) {
      console.log("new user: ", uid);
      const userRef = firestore.collection("users").doc(uid);

      userRef.get().then((userDoc)=>{
        if (!userDoc.exists) {
          userDoc.ref.set({
            "uid": uid,
            "userData": reqBodyJson.payload.userData,
            "permissions": ["read", "write"],
            "isHuman": true,
            "firstLogin": new Date(),
          });
        }
      });

      actionsPerformed.push("user update");
    }

    res.status(200).send({
      "authorized": true,
      "uuid": uid,
      "requestBody": reqBodyJson || {},
      "actionsPerformed": actionsPerformed,
    });
  });
} catch (error) {
  console.error("Error initializing Firebase Admin SDK:", error);
}
