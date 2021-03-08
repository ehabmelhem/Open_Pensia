const mongoose = require("mongoose");

const waitingUserModel = mongoose.model("waitingUserCollection", {
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  password: String,
  status: String, //{Waiting/Approved}
  fundName: String,
  chanel: String,
  registerDate: String,
  votes: [
    {
      proxyCode: String,
      officerId: String,
      voted: Number,
      voteDate: String,
    },
  ],
  article:
  {
    officerId: String,
    articleId: { type: String, unique: true },
    articleTitle: String,
    articleText: String,
    articleUrl: String,
  }
});

module.exports = waitingUserModel;