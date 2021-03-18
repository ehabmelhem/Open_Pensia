const router = require("express").Router();
const proxyController = require("../Controller/Proxy");

router
  .route("/get-corporate-default-question-data")
  .post(proxyController.getDefaultQuestion);
// /proxy/get-expanded-header POST

router
  .route("/all-Questions-of-corporate")
  .post(proxyController.getAllQuestions);
router
  .route("/get-Question-by-secur-Id")
  .post(proxyController.getQuestionBySecurId);
router
  .route("/get-all-fund")
  .post(proxyController.getAllFundNames); // {FundName:[]} Set
router
  .route("/get-all-chanell")
  .post(proxyController.getChanellNames); // request param= {fundname:String0} {chanell:[]} Set
router
  .route("/get-all-Corporates")
  .post(proxyController.getAllCorporate); // return {Coeporate:[]}
  router
  .route("/get-fund-info")
  .post(proxyController.getFundInfo); // return 

module.exports = router;
