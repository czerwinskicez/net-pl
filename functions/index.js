try {
  const debuggingLevel = 7;

  const admin = require("firebase-admin");
  // const functions = require("firebase-functions");
  const {onRequest} = require("firebase-functions/v2/https");
  // const {getFirestore, doc, setDoc} = require("firebase/firestore");

  const serviceAdminAccount = require("./adminAccountKey.json");

  admin.initializeApp({
    credential: admin.credential.cert(serviceAdminAccount),
    databaseURL: "https://net-pl-default-rtdb.europe-west1.firebasedatabase.app",
  });

  const firestore = admin.firestore();

  const _Log = async (type, message, uid = "") => {
    if (!type || !message) {
      console.error("Type and message are required");
      return;
    }

    try {
      await firestore.collection("log").add({
        type: type,
        message: message,
        timestamp: new Date(),
        uid: uid,
      });
      console.log("Log added successfully");
    } catch (error) {
      console.error("Error adding log: ", error);
    }
  };

  exports.userAction = onRequest({
    cors: true,
    timeoutSeconds: 15,
    region: "europe-central2",
  }, async (req, res)=>{
    try {
      const requestBodyStr = req.body;
      const requestBodyJson = JSON.parse(requestBodyStr);

      if (typeof requestBodyJson.action == "undefined") {
        return res.status(400).send({
          "error": "Missing 'action' parameter",
        });
      }


      const responseJson = {
        // "requestBodyStr": requestBodyStr,
        "requestBodyJson": requestBodyJson,
      };

      if (debuggingLevel >= 1) console.log("debuggingLevel: ", debuggingLevel);
      if (debuggingLevel >= 5) console.log("requestBodyJson: ", requestBodyJson);
      if (debuggingLevel >= 6) console.log("request headers: ", req.headers);
      if (debuggingLevel >= 9) console.log("requestBodyStr: ", requestBodyStr);

      // user authorization
      const bearerToken = req.headers &&
        req.headers.authorization &&
        req.headers.authorization.split("Bearer ")[1];

      if (debuggingLevel >= 8) console.log("bearer token present");
      admin.auth().verifyIdToken(bearerToken).then((decodedToken)=>{
        const userUid = decodedToken.uid;
        if (debuggingLevel >= 7) console.log("bearer token authorized. Uid: "+userUid);

        if (userUid) {
          responseJson.authorized = true;
          responseJson.uid = userUid;

          if (requestBodyJson) {
            // userActions (authorized only)
            const allowedActions = ["login", "test", "getContext"];

            const currentAction = requestBodyJson.action;
            if (currentAction && allowedActions.includes(currentAction)) {
              responseJson.action = currentAction;

              // action: test
              if (currentAction == "test") {
                responseJson.testOK = true;

                _Log("test: test", "OK", userUid);
                return res.status(200).send(responseJson);
              }

              // action: login
              if (currentAction == "login") {
                try {
                  const userIp = req.headers["x-forwarded-for"] || req.ip || req.connection.remoteAddress || "0.0.0.0";
                  responseJson.userIp = userIp;

                  const userProfilePayloadObj = requestBodyJson.payload &&
                    requestBodyJson.payload.authResult &&
                    requestBodyJson.payload.authResult.additionalUserInfo &&
                    requestBodyJson.payload.authResult.additionalUserInfo.profile;

                  if (debuggingLevel >= 6) console.log("userProfilePayloadObj: ", userProfilePayloadObj);

                  const userDataObj = {
                    "uid": userUid,
                    "lastAuthResult": userProfilePayloadObj,
                    "isHuman": true,
                  };

                  _Log("login: success", userIp, userUid);

                  firestore.collection("users").doc(userUid).set(userDataObj, {
                    merge: true,
                  }).then((onSuccess)=>{
                    if (debuggingLevel >= 7) console.log(onSuccess);
                  }).catch((error)=>{
                    console.error("user update error: ", error);
                    throw error;
                  });
                } catch (e) {
                  console.error("Error saving user data", e);
                  _Log("error: saving user data", e, userUid);
                }

                responseJson.userDataUpdated = true;
                return res.status(200).send(responseJson);
              }

              // action: getContext
              if (currentAction == "getContext") {
                // .
                responseJson.getContextTest = true;
                if (requestBodyJson.payload && requestBodyJson.payload.contextId) {
                  const contextId = requestBodyJson.payload.contextId;
                  firestore.collection("users").doc(userUid).get().then((userDoc)=>{
                    console.log(userDoc);
                    const userPermissions = userDoc.data().permissions|| [];
                    responseJson.userPermissions = userPermissions;

                    if (contextId == "start") {
                      responseJson.contextData = {
                        contextName: "start",
                      };

                      return res.status(200).send(responseJson);
                    } else if (contextId == "admin_panel") {
                      if (userPermissions.includes("admin")) {
                        responseJson.contextData = {
                          contextName: "admin",
                        };
                      } else {
                        responseJson.contextError = "insufficient_permissions";
                      }

                      return res.status(200).send(responseJson);
                    } else if (contextId == "user_panel") {
                      responseJson.contextData = {
                        contextName: "user_panel",
                      };
                    } else {
                      responseJson.contextError = "context_not_found";

                      return res.status(200).send(responseJson);
                    }
                  }).catch((err)=>{
                    console.error("getContext: getUserData: ", err);
                  });
                } else {
                  res.status(500).send({
                    error: "missing contextId in payload",
                  });
                }
              }
            } else {
              return res.status(400).send({
                "error": "Invalid action ("+currentAction+")",
              });
            }
          }
        } else {
          return res.status(401).send({
            "error": "User not authorized",
          });
        }
      }).catch((authError)=>{
        return res.status(401).send({
          "error": "Bearer token not authorized",
        });
      });


      // return res.status(200).send({
      //   "test": true,
      //   "requestBodyStr": requestBodyStr,
      //   "requestBodyJson": requestBodyJson,
      // });
    } catch (error) {
      return res.status(500).send({
        "error": error,
      });
    }
  });
} catch (criticalError) {
  console.error("criticalError: ", criticalError);
}
