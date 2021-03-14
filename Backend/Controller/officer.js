const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");
const fetch = require("node-fetch");
const Officer = require("../Schema/Officer");
const User = require("../Schema/User");
const ObjectId = require("mongoose").Types.ObjectId;

/* 
dis: add a new article
parameters: {"officerId":"String" ,"articleTitle":"String","articleText":"String","articleURL":"String"}			
return: {ok:true}
return: {ok:false}			 
*/
exports.addArticle = async (req, res) => {
  try {
    const { officerId, articleTitle, articleText, articleUrl } = req.body;
    let articleStatus = "Approved";
    let article = {
      officerId,
      articleTitle,
      articleText,
      articleUrl,
      articleStatus,
    };
    // let resArticle=addNewArticle(article);
    // console.log(article);

    if (article !== null) {
      await Officer.find({ officerId: article.officerId }).then(
        async (data) => {
          if (data.length !== 0) {
            if (article.articleStatus === "Approved") {
              const allArticle = data[0].officerArticles;
              const Articletoupdate = {
                articleId: uuidv4(),
                articleTitle: article.articleTitle,
                articleText: article.articleText,
                articleUrl: article.articleUrl,
                articleStatus: article.articleStatus,
              };
              allArticle.push(Articletoupdate);
              await Officer.update(
                { officerId: data[0].officerId },
                { officerArticles: allArticle }
              )
                .then(() => {
                  console.log("update new article");
                  res.send({ Ok: true, doc: Articletoupdate });
                })
                .catch((e) => {
                  console.log("we cant update the Article");
                  flag = false;
                  res.send({
                    Ok: false,
                    messege: "error to update article",
                  });
                });
            }
          }
        }
      );
    }
  } catch (e) {
    console.log("could not run addArticle in Officer");
    res.send({ Ok: false, messege: "could not run addArticle in Officer" });
  }
};

async function addNewArticle(article) {}
// module.exports = { addNewArticle };
////////////////////////////////////////////////////////
exports.officerData = async (req, res) => {
  try {
    const { officerId } = req.body;
    console.log(officerId);

    // http://open-pension-tsofen.herokuapp.com/api/proxies?filter[Officers_ID]=64516271
    let url =
      "http://open-pension-tsofen.herokuapp.com/api/proxies?filter[Officers_ID]=" +
      officerId;
    //  let url="http://open-pension-tsofen.herokuapp.com/api/interests"

    let settings = { method: "Get" };

    fetch(url, settings)
      .then((res) => res.json())
      .then((json) => {
        res.send({ ok: true, doc: json.data });
        // do something with JSON
      });
  } catch (e) {
    console.log("officerData fun bug");
  }
};
////////////////////////////////////////////////////////
exports.officerArticles = async (req, res) => {
  try {
    const { officerId } = req.body;

    const officer = await Officer.findOne({ officerId });

    if (officer.officerArticles !== null) {
      res.send({
        Ok: true,
        doc: officer.officerArticles,
      });
    } else {
      res.send({
        Ok: false,
        messege: "articles not found for this officer",
      });
    }
  } catch (e) {
    console.log("officerArticles fun bug");
  }
};
// question votes belong to officer? // userid same like schema of waiting-user? oe email //
exports.bigVote = async (req, res) => {
  try {
    const { email, officerid, Proxy_code, voted, votes } = req.body; //votes:[{officerId,,voted}]
    var datetime = new Date();
    await User.find({ _id: ObjectId(email) }).then(
      /// use email or id??
      async (data) => {
        if (data.length !== 0) {
          const UserVotes = data[0].votes;
          
          const Uservotesupdate = 
               {
                 proxyCode: Proxy_code,
                 officerId: officerid,
                 voted: voted,
                 voteDate: datetime,
               }
           
           UserVotes.update(Uservotesupdate);  // push?
          }})
  }
  catch (e) {
    console.log("could not run ????");
    res.send({ Ok: false, messege: "could not run ?????? " });
  }
};

//check if user exists
////////////////////////////////////////////////////////
exports.officerPercentages = async (req, res) => {
  try {
     const { officerId,proxyCode } = req.body;

     const officer = await Officer.findOne({ officerId });

     const likes= await Officer.find( { a: 5, b: 5, c: 5 } ).count()

     const officerProxy = await Officer.find(
      { officerId: officerId },
      { votes: { $elemMatch: { proxyCode: proxyCode } } }
    );

    // if (officer.officerArticles !== null) {
    //   res.send({
    //     Ok: true,
    //     doc: officer.officerArticles,
    //   });
    // } else {
    //   res.send({
    //     Ok: false,
    //     messege: "articles not found for this officer",
    //   });
    // }
  } catch (e) {
    console.log("officerPercentages fun bug");
  }
};