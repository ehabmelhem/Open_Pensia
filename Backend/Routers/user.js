const router = require("express").Router();
const userController = require("../Controller/user");

router
  .route("/add-approved-user")
  .post(userController.addApprovedUser);

router
  .route("/add-user")
  .post(userController.addUser);








module.exports = router;
