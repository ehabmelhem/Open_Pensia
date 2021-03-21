const router = require("express").Router();
const waitingUserController = require("../Controller/waitingUser");

router.route("/add-user").post(waitingUserController.addWaitingUser);

// router
//   .route("/add-user")
//   .post(userController.addUser);

module.exports = router;
