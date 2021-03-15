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

async function addNewArticle(article) { }
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
exports.addVote = async (req, res) => {
  try {
    const {email,votes} = req.body; //votes:[{officerId,,voted}]
    var datetime = new Date();

//     await User.findAndUpdate(
//       { email: email, "votes.proxyCode": e.proxyCode},
//      { "$push": 
//      {"votes.$.allvotes": newVoteOfficer
//      }
//  }
//     );


/////////////////////////////////////////
<<<<<<< HEAD
    votes.forEach(async (currentVote)=>

      const userVotesUpdate =
      {
        proxyCode: currentVote.proxyCode,
        officerId: currentVote.officerId,
        voted: currentVote.voted,
        voteDate: datetime
      }

      await User.findAndUpdate(
        { email: email, "votes.proxyCode": currentVote.proxyCode,"votes.officerId": currentVote.officerId},
     //  { "$push": 
     //  {"votes.$.allvotes": newVoteOfficer}
     {"votes": userVotesUpdate,upsert:true}
 //  }
      )
    )
=======
    votes.forEach(async currentVote=>
     await  User.find({ email: email }).then(
      async (data) => {
        if (data.length !== 0) {
>>>>>>> serverteam
    
          const UserVoteItem = await User.findOne(
            { email: email },
            { votes: { $elemMatch: { proxyCode: currentVote.proxyCode, officerid: currentVote.officerId } } }
            ).then(data=> 
             { 
              console.log("********************************");
               //const UserVotes = data[0].votes;
               console.log(data);
               


               console.log("********************************");
               const Uservotesupdate =
               {
                 proxyCode: Proxy_code,
                 officerId: officerid,
                 voted: voted,
                 voteDate: datetime,
               }       
               UserVotes.update(Uservotesupdate);            
            }
            ) }}))
            
  }
   catch (e) {
    console.log(e);
    console.log("addVote in Officer could not run ????");
  }
};

//check if user exists

 // push?
    

////////////////////////////////////////////////////////
exports.officerPercentages = async (req, res) => {
  try {
    const { officerId, proxyCode } = req.body;
    let likes = 0, dislikes = 0;
    // const officer = await Officer.findOne({ officerId });

    // const likes= await Officer.find( { a: 5, b: 5, c: 5 } ).count()

    const officerProxy = await Officer.findOne(
     { officerId: officerId },
      { votes: { $elemMatch: { proxyCode: proxyCode } } }
      //    { $and: [  { officerId: officerId },{ votes: { $elemMatch: { proxyCode: proxyCode }}}   ] }
      //    ,{allVotes}
    );
    //  console.log(officerProxy.allVotes)
    // console.log(votes)

    //  const officerProxy2 = await officerProxy.find(
    //   { $and: [  { proxyCode: proxyCode },{ votes: { $elemMatch: { proxyCode: proxyCode }}}   ] } 
    //   ,{allVotes} 
    // );

    //  console.log(officerProxy2)

    const currentVotes = officerProxy.votes[0].allvotes;
    currentVotes.forEach(async (arrayVote) => {
      if (arrayVote.voted === 1) likes++;
      if (arrayVote.voted === -1) dislikes++;
    })
    const likePercent = (likes / (likes + dislikes)) * 100;
    const dislikePercent = (dislikes / (likes + dislikes)) * 100;
    console.log(currentVotes)
    console.log(likePercent)
    console.log(dislikePercent)
    console.log(likes)
    console.log(dislikes)
    res.send({
      Ok: true,
      doc: { likePercent: likePercent, dislikePercent: dislikePercent, allvotes: officerProxy.votes[0].allvotes }
    });
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



// question votes belong to officer? // userid same like schema of waiting-user? oe email //
exports.bigVote2 = async (req, res) => 
{
 // try {
    const {votes, email} = req.body; //votes:[{officerId,,voted}]
    var datetime = new Date();
     const newUser = await User.findOne({ email: email });
      votes.forEach(async (e) => {
        console.log(e);
        // add to proxy
        const proxyOfVote = await User.findOne({ Proxy_code: e.proxyCode });
        //console.log(proxyOfVote);
        const proxyOfVoteDetailes = {
          email: e.email,
          officerId: e.officerId,
          voted: e.voted,
        };
      })}

      //  if (proxyOfVote.votes !== null) 
      //  {
         // console.log("proxy of votes :" + proxyOfVote.votes);
       //   await Proxy.findOneAndUpdate(
         //   { Proxy_code: e.proxyCode },
         //   { $push: { votes: proxyOfVoteDetailes } }
         // );
       //   proxyOfVote.votes.push(proxyOfVoteDetailes);
        //  console.log("proxy votes is not null");
      //  } else {
        //  const newArray = [proxyOfVoteDetailes];
       //   await Proxy.findOneAndUpdate(
       //     { Proxy_code: e.proxyCode },
        //    { votes: newArray }
       //   );
      //    console.log(newArray);
     //   }

        // add to officer
 /** 
 
        let like = 0;
        let absent = 0;
        let dislike = 0;
        console.log("counter 0");
        if (e.voted === 1) {
          like++;
        }
        if (e.voted === 0) {
          absent++;
        }
        if (e.voted === -1) {
          dislike++;
        }
        console.log("counter set");
        const officerOfVote = await Officer.findOne({ officerId: e.officerId });
        // const officerOfVoteDetailes= {userId: savedUser._id,
        //   officerId: e.officerId,
        //   voted: e.voted}

        //if officer votes null
        if (officerOfVote.votes === null) {
          const newVotes = [
            {
              proxyCode: e.proxyCode,
              allvotes: [
                {
                  proxyCode: e.proxyCode,
                  Security_ID: proxyOfVote.Security_ID,
                  userId: savedUser._id,
                  voted: e.voted,
                },
              ],
              likesCounter: like,
              absentCounter: absent,
              disLikesCounter: dislike,
            },
          ];
          await Officer.findOneAndUpdate(
            { Proxy_code: e.proxyCode },
            { votes: newVotes }
          );
        } else {
          // if officer votes has an array

          // const officerOfVote = await Officer.findOne({ officerId: e.officerId });
          const officerProxy = await Officer.findOne(
            { proxyCode: e.proxyCode },
            { votes: { $elemMatch: { proxyCode: e.proxyCode } } }
          );
          console.log(officerProxy);
          //  const officerProxy = await officerProxy.votes.findOne({ proxyCode: e.proxyCode });
          if (officerProxy === null) {
            const newProxyVotes = {
              proxyCode: e.proxyCode,
              allvotes: [
                {
                  proxyCode: e.proxyCode,
                  Security_ID: proxyOfVote.Security_ID,
                  userId: savedUser._id,
                  voted: e.voted,
                },
              ],
              likesCounter: like,
              absentCounter: absent,
              disLikesCounter: dislike,
            };
            //   await Officer.findOneAndUpdate({ Proxy_code: e.proxyCode }, {votes:newVotes})
            //   db.inventory.find( { $and: [ { price: { $ne: 1.99 } }, { price: { $exists: true } } ] } )
            //    { $inc: { no_of_likes: 1 }, "$push": { "users": userInfo } }
            await Officer.findOneAndUpdate(
              { officerId: e.officerId },
              { $push: { votes: newProxyVotes } }
            );
          }
        }
        // else{
      });

      */
    
 // catch
 // {
     
//  }
//  }
      
