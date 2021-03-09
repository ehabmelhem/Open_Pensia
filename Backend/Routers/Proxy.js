const router = require("express").Router();
const proxyController = require("../Controller/Proxy");

router
  .route("/get-corporate-default-question-data")
  .get(proxyController.getDefaultQuestion);

router
  .route("/all-Questions-of-corporate")
  .get(proxyController.getAllQuestions);
router
  .route("/get-Question-bu-secur-Id")
  .get(proxyController.getQuestionBySecurId);

module.exports = router;
