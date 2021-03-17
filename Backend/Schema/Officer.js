const mongoose = require("mongoose");

//mongodb+srv://openpensia:Jq4kPbpZ2dKh0X65@cluster0.ny9vy.mongodb.net/openpensia

const officerModel = mongoose.model("officerCollection", {
  officerId: String,
  officeName: String,
  officerImg: String,
  officerArticles: [
    {
      articleId: String,
      articleTitle: String,
      articleText: String,
      articleUrl: String,
      articleStatus: String, //{"Waiting","Approved"}
    },
  ],
  votes: [
    {
      proxyCode: String,
      allvotes: [
        {
          proxyCode: String,
          Security_ID: String,
          userId: String,
          voted: Number,
        },
      ],
    //  likesCounter: Number,
    //  absentCounter: Number,
    //  disLikesCounter: Number,
    },
  ],
});

module.exports = officerModel;
