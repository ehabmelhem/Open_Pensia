const router = require("express").Router();
const proxyController = require("../Controller/Proxy");
const jwt = require("jwt-simple");
const secret = "1234";

function checkRole(req, res, next) {
  let role = req.cookies.role;
  decRole = jwt.decode(role, secret);
  if (decRole.role === "user") {
    next();
  } else {
    res.send({ ok: false, messege: "you dont have Premeision" });
  }
}
router
  .route("/get-corporate-default-question-data")
  .post(checkRole, proxyController.getDefaultQuestion);
// /proxy/get-expanded-header POST
//  check

router
  .route("/all-Questions-of-corporate")
  .post(proxyController.getAllQuestions);
//  check

router
  .route("/get-Question-by-secur-Id")
  .post(checkRole, proxyController.getQuestionBySecurId);
router.route("/get-all-fund").post(proxyController.getAllFundNames); // {FundName:[]} Set
router.route("/get-all-chanell").post(proxyController.getChanellNames); // request param= {fundname:String0} {chanell:[]} Set
router.route("/get-all-Corporates").post(proxyController.getAllCorporate); // return {Coeporate:[]}
//  check

router.route("/get-fund-info").post(checkRole, proxyController.getFundInfo); // return
//  check
router
  .route("/get-expanded-header")
  .post(checkRole, proxyController.getExpandedHeader); // return

module.exports = router;
