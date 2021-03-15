const router = require("express").Router();
const officerController = require("../Controller/officer");

router
  .route("/add-article")
  .post(officerController.addArticle);

router
  .route("/get-officer-data")
  .get(officerController.officerData);

  router
  .route("/get-articles")
  .post(officerController.officerArticles);

  router
  .route("/add-vote")
 .post(officerController.addVote)

//  router
//  .route("/officer-percentages")
 // .post(officerController.officerPercentages);








module.exports = router;
