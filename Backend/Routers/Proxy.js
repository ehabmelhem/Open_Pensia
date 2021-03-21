const router = require("express").Router();
const proxyController = require("../Controller/Proxy");
const jwt = require("jwt-simple");
const secret = "1234";

function checkRole(req, res, next) {
  try {
    let role = req.cookies.role;
    decRole = jwt.decode(role, secret);
    if (decRole.role === "user") {
      next();
    } else {
      res.send({ ok: false, messege: "you dont have Premeision" });
    }
  } catch (e) {
    res.send({ ok: false, messege: "you have to login" });
  }
}
router
  .route("/get-corporate-default-question-data")
  .post(proxyController.getDefaultQuestion);
// /proxy/get-expanded-header POST

router
  .route("/all-Questions-of-corporate")
  .post(proxyController.getAllQuestions);

router      // needs checkRole
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

  router      // needs checkRole
  .route("/get-fund-info")
  .post(checkRole, proxyController.getFundInfo); // return

  router      // needs checkRole
  .route("/get-expanded-header")
  .post(checkRole, proxyController.getExpandedHeader); // return

  router      // needs checkRole
  .route("/open-questions-in-fund")
  .post(proxyController.getOpenQuestionsInFund); // return

  router      // needs checkRole
  .route("/waiting-questions-by-fund")
  .post(proxyController.getPendingQuestionsInFund);

module.exports = router;
