const router = require("express").Router();
const userController = require("../Controller/user");

router
  .route("/add-user")
  .post(userController.addUser);

// router
//   .route("/add-user")
//   .post(userController.addUser);








module.exports = router;
