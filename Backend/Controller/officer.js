const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");
const fetch = require("node-fetch");
const Officer = require("../Schema/Officer");
const User = require("../Schema/User");
const Proxy = require("../Schema/Proxy");
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
////////////////////////////////////////////////////////////////////////

exports.addVote = async (req, res) => {
  try {
    const { email, votes } = req.body; //votes:[{officerId,,voted}] =>SecurtyId
    const User_Id = await User.findOne({ email: email });

    const _id = User_Id._id;
    var datetime = new Date();

    votes.forEach(async (currentVote) => {
      const userVotesUpdate = {
        proxyCode: currentVote.proxyCode,
        officerId: currentVote.officerId,
        voted: currentVote.voted,
        voteDate: datetime,
      };

      /// run on the recived vote[] find each vote and update
      // const updateUserVote = await User.findOneAndUpdate(
      //   {
      //     email: email,
      //     "votes.proxyCode": currentVote.proxyCode,
      //     "votes.officerId": currentVote.officerId,
      //   },
      //   {
      //     $set: {
      //       "votes.$.proxyCode": currentVote.proxyCode,
      //       "votes.$.officerId": currentVote.officerId,
      //       "votes.$.voted": currentVote.voted,
      //       "votes.$.voteDate": datetime,
      //     },
      //   }
      // );

      var newUserVotes = [];
      var isChanged = false;
      var isEmpty = false;
      await User.find({ email: email }).then((data) => {
        if (data.length !== 0) {
          console.log(data.length);
          if (!data[0].votes || data[0].votes.length === 0) {
            isEmpty = true;
          } else {
            data[0].votes.map((elm) => {
              console.log(
                "proxyCode : " +
                  elm.proxyCode +
                  " -------------- " +
                  currentVote.proxyCode
              );
              console.log(
                "officerId : " +
                  elm.officerId +
                  " -------------- " +
                  currentVote.officerId
              );
              console.log(
                "voted : " + elm.voted + " -------------- " + currentVote.voted
              );
              if (
                elm.proxyCode == currentVote.proxyCode &&
                elm.officerId == currentVote.officerId &&
                elm.voted != currentVote.voted
              ) {
                newUserVotes.push({
                  proxyCode: currentVote.proxyCode,
                  officerId: currentVote.officerId,
                  voted: currentVote.voted,
                  voteDate: new Date(),
                });
                isChanged = true;
              } else {
                newUserVotes.push(elm);
              }
            });
          }
        }
      });
      console.log(isChanged);
      if (isEmpty) {
        await User.update(
          { email: email },
          {
            votes: [
              {
                proxyCode: currentVote.proxyCode,
                officerId: currentVote.officerId,
                voted: currentVote.voted,
                voteDate: new Date(),
              },
            ],
          }
        ).then(() => {
          console.log("update new vote");
        });
      } else {
        if (isChanged) {
          await User.update({ email: email }, { votes: newUserVotes }).then(
            () => {
              console.log("update the user votes");
            }
          );
        }
      }

      /// if recived vote[] doesnt exist add it to the user
      // console.log(updateUserVote);

      const proxyVote = {
        userId: User_Id._id,
        officerId: currentVote.officerId,
        voted: currentVote.voted,
      };

      const ProxyVoteUpdate = await Proxy.findOneAndUpdate(
        {
          Proxy_code: currentVote.proxyCode,
          "votes.userId": User_Id._id,
          //  "votes.officerId": currentVote.officerId,
        },
        {
          $set: {
            "votes.$.userId": User_Id._id,
            "votes.$.officerId": currentVote.officerId,
            "votes.$.voted": currentVote.voted,
          },
        }
      );
      console.log("*&*&*&" + ProxyVoteUpdate);
      /// if recived vote[] doesnt exist add it to the user
      if (ProxyVoteUpdate == null) {
        console.log("Proxy +" + currentVote.proxyCode + "not found");
      }

      const existofficer = await Proxy.findOne({
        officerId: currentVote.articleId,
      });
      console.log("******  OFFICER ***********>" + existofficer);
      const proxyOfVoteDetailes = {
        userId: User_Id._id,
        officerId: currentVote.officerId,
        voted: currentVote.voted,
      };
      if (existofficer == null) {
        //   console.log("proxy of votes :" + proxyOfVote.votes);
        await Proxy.findOneAndUpdate(
          { Proxy_code: currentVote.proxyCode },
          { $push: { votes: proxyOfVoteDetailes } }
        );
      } else {
        console.log("do this");
        //console.log(newArray);
      }

      // add to officer Vote
      const officerOfVote = await Officer.findOne({
        officerId: currentVote.officerId,
      });

      if (officerOfVote.votes === null) {
        console.log("officerOfVote.votes is null");
        const newVotes = [
          {
            proxyCode: currentVote.proxyCode,
            allvotes: [
              {
                proxyCode: currentVote.proxyCode,
                Security_ID: ProxyVoteUpdate.Security_ID,
                userId: _id,
                voted: currentVote.voted,
              },
            ],
          },
        ];
        await Officer.findOneAndUpdate(
          { Proxy_code: currentVote.proxyCode },
          { votes: newVotes }
        );
      } else {
        // if officer votes has an array

        console.log(currentVote.proxyCode);
        const officerProxy = await Officer.findOne({
          $and: [
            { officerId: currentVote.officerId },
            { votes: { $elemMatch: { proxyCode: currentVote.proxyCode } } },
          ],
        });

        if (officerProxy === null) {
          console.log("officerProxy is null, need newProxyVotes");
          const newProxyVotes = {
            proxyCode: currentVote.proxyCode,
            allvotes: [
              {
                proxyCode: currentVote.proxyCode,
                Security_ID: currentVote.Security_ID,
                userId: _id,
                voted: currentVote.voted,
              },
            ],
          };

          await Officer.findOneAndUpdate(
            { officerId: currentVote.officerId },
            { $push: { votes: newProxyVotes } }
          );
        } else {
          const newVoteOfficer = {
            proxyCode: currentVote.proxyCode,
            Security_ID: currentVote.Security_ID, // must add here
            userId: _id,
            voted: currentVote.voted,
          };
          // console.log(userId._id);
          //const officerOfVote = await Officer.findOne();
          // console.log(_id);
          console.log(User_Id);
          console.log(
            "the User id exist in the officer's proxy" + officerOfVote
          );
          let flag = false;
          await Officer.find({
            officerId: currentVote.officerId,
          }).then(async (data) => {
            if (data.length !== 0) {
              data[0].votes.map((elm) => {
                if (elm.proxyCode === currentVote.proxyCode) {
                  elm.allvotes.map((vote) => {
                    console.log(
                      "proxyCode : " +
                        vote.proxyCode +
                        " ------- " +
                        currentVote.proxyCode
                    );
                    console.log(
                      "Securiry_ID : " +
                        vote.Security_ID +
                        " ------- " +
                        currentVote.Security_ID
                    );
                    console.log("userId : " + vote.userId + " ------- " + _id);
                    if (
                      vote.proxyCode == currentVote.proxyCode &&
                      vote.Security_ID == currentVote.Security_ID &&
                      vote.userId == _id
                    ) {
                      flag = true;
                    }
                    console.log(flag);
                  });
                }
              });
              if (!flag) {
                await Officer.findOneAndUpdate(
                  {
                    officerId: currentVote.officerId,
                    "votes.proxyCode": currentVote.proxyCode,
                  },
                  {
                    $push: {
                      "votes.$.allvotes": newVoteOfficer,
                    },
                  }
                );
              }
            }
          });
        }
      }
    });

    res.send({ ok: true });
  } catch (e) {
    console.log(e);
    console.log("addVote in Officer could not run ????");
    res.send({
      ok: false,
      messege:
        "System or connection error please check your Internet Connection",
    });
  }
};

///////////////////////////////////////////////////////////////////////////////
exports.officerPercentages = async (req, res) => {
  try {
    const { officerId, proxyCode } = req.body;
    let likes = 0,
      dislikes = 0;

    const officerProxy = await Officer.findOne(
      { officerId: officerId },
      { votes: { $elemMatch: { proxyCode: proxyCode } } }
    );

    const currentVotes = officerProxy.votes[0].allvotes;
    currentVotes.forEach(async (arrayVote) => {
      if (arrayVote.voted === 1) likes++;
      if (arrayVote.voted === -1) dislikes++;
    });
    const likePercent = (likes / (likes + dislikes)) * 100;
    const dislikePercent = (dislikes / (likes + dislikes)) * 100;
    console.log(currentVotes);
    console.log(likePercent);
    console.log(dislikePercent);
    console.log(likes);
    console.log(dislikes);
    res.send({
      Ok: true,
      doc: {
        likePercent: likePercent,
        dislikePercent: dislikePercent,
        allvotes: officerProxy.votes[0].allvotes,
      },
    });
  } catch (e) {
    console.log("officerPercentages fun bug");
  }
};

////////////////////////  for test   //////////////////////////
/**    t e s t      t e s t      t e s t         t e s t 
      const removeAllVotes = await User.findOneAndUpdate(
        { email: email, "votes.proxyCode": currentVote.proxyCode,
         "votes.officerId": currentVote.officerId },
         { "$set": { votes: [] } },
        )
         */

// const addingVote = await User.findOneAndUpdate(
// { email: email},
//{ "$push": { votes: userVotesUpdate } },)
//   {votes: userVotesUpdate},
//   { upsert: true}
/**

      const userVotesUpdate = {
        proxyCode: currentVote.proxyCode,
        officerId: currentVote.officerId,
        voted: currentVote.voted,
        voteDate: datetime,
      }
      console.log(userVotesUpdate)
       */
//////////////////////////////////////////////////////////////
