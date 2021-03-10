const router = require("express").Router();
const officerController = require("../Controller/officer");

router
  .route("/add-article")
  .post(officerController.addArticle);

// router
//   .route("/add-user")
//   .post(userController.addUser);








module.exports = router;
