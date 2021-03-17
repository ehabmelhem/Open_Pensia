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
////////////////////////////////////////////////////////////////////////

exports.addVote = async (req, res) => {
  try {
    const { email, votes } = req.body; //votes:[{officerId,,voted}]
    const User_Id = await User.findOne({ email: email}); 
    var datetime = new Date();
    
    votes.forEach(async (currentVote) => {

      const userVotesUpdate = {
        proxyCode: currentVote.proxyCode,
        officerId: currentVote.officerId,
        voted: currentVote.voted,
        voteDate: datetime,
      }
        
      
     /// run on the recived vote[] find each vote and update  
    const updateUserVote = await User.findOneAndUpdate(
     {'email':email,'votes.proxyCode': currentVote.proxyCode,'votes.officerId': currentVote.officerId }, 
     {   
       '$set': {
         'votes.$.proxyCode': currentVote.proxyCode,
         'votes.$.officerId': currentVote.officerId,
         'votes.$.voted': currentVote.voted,
         'votes.$.voteDate': datetime,
        } }    )
      /// if recived vote[] doesnt exist add it to the user
      if(updateUserVote == null )
      {
        const addingVote = await User.findOneAndUpdate(
           { email: email},
           { "$push": { votes: userVotesUpdate } },) 
           console.log("***addingVote*** "+addingVote);         
      }
      //-- proxy add-vote
      /**
       Proxy_code: String,
  Security_ID: String,
  Topic: String,
  creationDate: String,
  expiredDate: String,
  votes: [
    {
      userId: String,
      officerId: String,
      voted: Number
    },
  ],
      
       */
  const proxyVote = {
    userId: User_Id._id,
    officerId: currentVote.officerId,
    voted: currentVote.voted,
  }
      
      const ProxyVoteUpdate = await Proxy.findOneAndUpdate(
        {'Proxy_code':currentVote.proxyCode,'votes.userId': User_Id._id,'votes.officerId': currentVote.officerId }, 
        {
          '$set': {
            'votes.$.userId': User_Id._id,
            'votes.$.officerId': currentVote.officerId,
            'votes.$.voted': currentVote.voted,
           } }   
         )
         /// if recived vote[] doesnt exist add it to the user
         if(ProxyVoteUpdate == null )
         {
           const addingProxyVote = await Proxy.findOneAndUpdate(
              { 'Proxy_code':currentVote.proxyCode},
              { "$push": { votes: proxyVote } },)   
              console.log(addingProxyVote);       
         }
         
 //-- officer add-vote
      /**
            /**
officerId: String,
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
    },
  ],
 */
  const officerVote = {
    
    proxyCode: currentVote.proxyCode,
    Security_ID: null,
    userId: User_Id._id,
    voted: currentVote.voted,
  }
  const OfficerVoteUpdate = await Officer.findOneAndUpdate(
    {'officerId':currentVote.officerId,'votes.proxyCode': currentVote.proxyCode,'votes.allvotes.proxyCode': currentVote.proxyCode }, 
    {
      '$set': {
        'votes.$.allvotes.$.voted': currentVote.voted,
        'votes.$.officerId': currentVote.officerId,
        'votes.$.voted': currentVote.voted,
       } }   
     )
     /// if recived vote[] doesnt exist add it to the user
     if(OfficerVoteUpdate == null )
     {
       const addingOfficerVote = await Officer.findOneAndUpdate(
          {'officerId':currentVote.officerId,'votes.proxyCode': currentVote.proxyCode },
          { "$push": { allvotes: officerVote } },)   
          console.log(addingOfficerVote);       
     }

    }
    )

    console.log(res.send({ ok: true }));
    
    
  }
  catch (e) {
    console.log(e);
    console.log("addVote in Officer could not run ????");
  }
};

///////////////////////////////////////////////////////////////////////////////
exports.officerPercentages = async (req, res) => {
  try {
    const { officerId, proxyCode } = req.body;
    let likes = 0, dislikes = 0;

    const officerProxy = await Officer.findOne(
      { officerId: officerId },
      { votes: { $elemMatch: { proxyCode: proxyCode } } }
    );

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