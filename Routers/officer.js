const router = require("express").Router();
const officerController = require("../Controller/officer");
const jwt = require("jwt-simple");
const secret = "1234";

function checkRole(req, res, next) {
  try {
    let role = req.cookies.role;
    decRole = jwt.decode(role, secret);
    if (decRole.role !== undefined || decRole.role !== null) {
      next();
    } else {
      res.send({ ok: false, messege: "you dont have Premeision" });
    }
  } catch (e) {
    res.send({ ok: false, messege: "you have to login" });
  }
}

router.route("/add-article").post(officerController.addArticle);

router.route("/get-officer-data").post(officerController.officerData);

router.route("/get-articles").post(officerController.officerArticles);

router // needs checkRole
  .route("/add-vote")
  .post(checkRole, officerController.addVote);

router.route("/officer-percentages").post(officerController.officerPercentages);

module.exports = router;
