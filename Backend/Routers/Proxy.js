const router = require("express").Router();
const proxyController = require("../Controller/Proxy");

router
  .route("/get-corporate-default-question-data")
  .get(proxyController.getDefaultQuestion);

router
  .route("/all-Questions-of-corporate")
  .get(proxyController.getAllQuestions);










module.exports = router;
