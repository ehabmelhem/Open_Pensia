const express = require("express");
const app = express();

const User = require("../Schema/User");
const Officer = require("../Schema/Officer");
const Proxy = require("../Schema/Proxy");
const WaitingUser = require("../Schema/WaitingUser");
const { v4: uuidv4 } = require("uuid");

/* 
dis: add a new user
parameters: user info from client
return: {ok:true}
return: {ok: false,message:'could not add user'}			 
*/
/**
 * 
 {
      "firstName": "Rami",
      "lastName": "Mohammed",
      "email": "rami.mohammed@gmail.com",
      "phone": "0502134551",
      "password": "pass123",
      "fundName": "הראל",
      "chanel": "גמל/פנסיה",
      "vote": 
        {
          "proxyCode": "12345678",
          "officerId": "87654321",
          "voted": 1
        },
        "newArticle":{
      "officerId":"123",
      "articleId":"77777",
      "articleTitle": "My Article",
      "articleText": "this is an article",
      "articleUrl": "url"
    }


    }

 */
exports.addUser = async (req, res) => {
  try {
    const flag = true;
    const {
      firstName,
      lastName,
      email,
      phone,
      password,
      fundName,
      chanel,
      votes,
      newArticle,
    } = req.body;
    //middleware
    console.log("in fun addNewUser");

    //console.log(username, password)

    var datetime = new Date();

    //check if user exists
    const newUser = new User({
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      password: password,
      status: "Approved", //{Waiting/Approved}
      fundName: fundName,
      chanel: chanel,
      registerDate: datetime,
      // // votes: [
      // //   {
      // //     proxyCode: vote.proxyCode,
      // //     officerId: vote.officerId,
      // //     voted: vote.voted,
      // //     voteDate: datetime,
      // //   },
      // ],
    });

    const user = await User.findOne({ email: newUser.email });

    if (user !== null) {
      //    res.send({ ok: false, message: 'user with such user name already exists' })
      console.log("user with such user name already exists");
      res.send({
        Ok: false,
        message: "user with such user name already exists",
      });
    } else {
      //   const newUser = new User({ username, password });

      await newUser.save().then(() => {
        console.log("user saved");
      });
      // res.send({ ok: true });

      /*
       "newArticle":{
      "officerId":"123",
      "articleId":"77777",
      "articleTitle": "My Article",
      "articleText": "this is an article",
      "articleUrl": "url"
    }
      */
      if (newArticle !== null) {
        await Officer.find({ officerId: newArticle.officerId }).then(
          async (data) => {
            if (data.length !== 0) {
              const allArticle = data[0].officerArticles;
              const Articletoupdate = {
                articleId: uuidv4(),
                articleTitle: newArticle.articleTitle,
                articleText: newArticle.articleText,
                articleUrl: newArticle.articleUrl,
              };
              allArticle.push(Articletoupdate);
              await Officer.update(
                { officerId: data[0].officerId },
                { officerArticles: allArticle }
              )
                .then(() => {
                  console.log("update new article");
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
        );
      }
      if (flag) {
        res.send({
          Ok: true,
          doc: newUser,
        });
      }
    }
  } catch (e) {
    console.log("could not run addUser in User");
    res.send({ Ok: false });
  }
};
//////////////////////////////////////////////////////////
exports.addApprovedUser = async (req, res) => {
  try {
    const flag = true;
    const {
      email
    } = req.body;
    //middleware
    console.log("in fun addApprovedUser");


    var datetime = new Date();

    //check if user exists
    

    const user = await WaitingUser.findOne({ email: email });

    if (user !== null) {
      console.log('in if');
      const newUser = new User({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        password: user.password,
        status: "Approved", //{Waiting/Approved}
        fundName: user.fundName,
        chanel: user.chanel,
        registerDate: user.datetime,
        votes:user.votes
      });

      await newUser.save().then(() => {
        console.log("new Approved user saved to User Schema");
      });


  // add votes to proxy and officer
 
  const savedUser = await User.findOne({ email: email });
   newUser.votes.forEach(async(e) => {
    console.log(e);
    // add to proxy
    const proxyOfVote = await Proxy.findOne({ Proxy_code: e.proxyCode });
    console.log(proxyOfVote);
    const proxyOfVoteDetailes= {userId: savedUser._id,
      officerId: e.officerId,
      voted: e.voted}
    if (proxyOfVote.votes !== null){
      console.log('proxy of votes :'+proxyOfVote.votes);
      await Proxy.findOneAndUpdate(
        { Proxy_code: e.proxyCode } ,
        {$push: {"votes": proxyOfVoteDetailes} }
      );
      proxyOfVote.votes.push(proxyOfVoteDetailes);
      console.log('proxy votes is not null');
    }
    else{
      const newArray=[proxyOfVoteDetailes];
      await Proxy.findOneAndUpdate({ Proxy_code: e.proxyCode }, {votes:newArray})
      console.log(newArray);
    }

    // add to officer
    let like=0;
    let absent=0;
    let dislike=0;
    console.log('counter 0');
    if(e.voted ===1){like++;}
    if(e.voted ===0){absent++;}
    if(e.voted ===-1){dislike++;}
    console.log('counter set');
    const officerOfVote = await Officer.findOne({ officerId: e.officerId });
    // const officerOfVoteDetailes= {userId: savedUser._id,
    //   officerId: e.officerId,
    //   voted: e.voted}

    //if officer votes null
    if (officerOfVote.votes === null){
      const newVotes=[
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
      await Officer.findOneAndUpdate({ Proxy_code: e.proxyCode }, {votes:newVotes})

    }else{ 
      // if officer votes has an array

     // const officerOfVote = await Officer.findOne({ officerId: e.officerId });
     const officerProxy = await Officer.findOne({ proxyCode: e.proxyCode },
                 { votes: { $elemMatch: { proxyCode: e.proxyCode } } } )
                 console.log(officerProxy);
    //  const officerProxy = await officerProxy.votes.findOne({ proxyCode: e.proxyCode });
      if(officerProxy === null){
        const newProxyVotes=
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
          };
       //   await Officer.findOneAndUpdate({ Proxy_code: e.proxyCode }, {votes:newVotes})
    //   db.inventory.find( { $and: [ { price: { $ne: 1.99 } }, { price: { $exists: true } } ] } )
   //    { $inc: { no_of_likes: 1 }, "$push": { "users": userInfo } }
       await Officer.findOneAndUpdate(
          { officerId: e.officerId } ,
          {$push: {"votes": newProxyVotes} }
        );
   //    proxyOfVote.votes.push(newProxyVotes);
      }

    }
    // else{

    //   officerOfVote.votes..push(proxyOfVoteDetailes);
    // }

    ////////////////////

  });

// add new article to officer
    console.log('in if2');
      if (user.article !== null) {
        await Officer.find({ officerId: user.article.officerId }).then(
          async (data) => {
            if (data.length !== 0) {
              if (user.article.articleStatus ==='Approved') {
              const allArticle = data[0].officerArticles;
              const Articletoupdate = {
                articleId: uuidv4(),
                articleTitle: user.article.articleTitle,
                articleText: user.article.articleText,
                articleUrl: user.article.articleUrl,
                articleStatus:user.article.articleStatus
              };
              console.log('in if4');
              allArticle.push(Articletoupdate);
              console.log('in if5');
              await Officer.update(
                { officerId: data[0].officerId },
                { officerArticles: allArticle }
              )
                .then(() => {
                  console.log("update new article");
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
      console.log('in if3');
      if (flag) {
        const updateStaus = await WaitingUser.findOneAndUpdate({email:email}, {status:"Transferred"});
        res.send({
          Ok: true,
          doc: newUser,
        });
      }
    }else {
      //    res.send({ ok: false, message: 'user with such user name already exists' })
      console.log("user with such user name already exists");
      res.send({
        Ok: false,
        message: "user with such user name already exists",
      });
    }
  } catch (e) {
    console.log("could not run addApprovedUser in User");
    res.send({ Ok: false });
  }
};


