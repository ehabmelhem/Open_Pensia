const router = require("express").Router();
const officerController = require("../Controller/officer");
const jwt = require("jwt-simple");
const secret = "1234";

function checkRole(req, res, next) {
  let role = req.cookies.role;
  decRole = jwt.decode(role, secret);
  if ((decRole.role = "user")) {
    next();
  } else {
    res.send({ ok: false, messege: "you dont have Premeision" });
  }
}

router.route("/add-article").post(officerController.addArticle);

router.route("/get-officer-data").post(officerController.officerData);

router.route("/get-articles").post(officerController.officerArticles);
router.route("/add-vote").post(checkRole, officerController.addVote);

router.route("/officer-percentages").post(officerController.officerPercentages);

module.exports = router;
