const router = require("express").Router();
const proxyController = require("../Controller/Proxy");

router
  .route("/get-corporate-default-question-data")
  .get(proxyController.getDefaultQuestion);
// /proxy/get-expanded-header POST

router
  .route("/all-Questions-of-corporate")
  .get(proxyController.getAllQuestions);
router
  .route("/get-Question-by-secur-Id")
  .post(proxyController.getQuestionBySecurId);

router.route("/get-all-fund").get(proxyController.getAllFundNames); // {FundName:[]} Set
router.route("/get-all-chanell").get(proxyController.getChanellNames); // request param= {fundname:String0} {chanell:[]} Set
router.route("/get-all-Corporates").post(proxyController.getAllCorporate); // return {Coeporate:[]}

module.exports = router;
