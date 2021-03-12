const router = require("express").Router();
const officerController = require("../Controller/officer");

router
  .route("/add-article")
  .post(officerController.addArticle);

router
  .route("/get-officer-data")
  .get(officerController.officerData);








module.exports = router;
