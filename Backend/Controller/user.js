const express = require("express");
const app = express();

const User = require("../Schema/User");
const Officer = require("../Schema/Officer");
const Proxy = require("../Schema/Proxy");
const WaitingUser = require("../Schema/WaitingUser");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

// const officerController = require("../Controller/officer");

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
      await newUser.save().then(() => {
        console.log("user saved");
      });

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
    const { email } = req.body;
    console.log("in fun addApprovedUser");

    var datetime = new Date();

    //check if user exists
    const user = await WaitingUser.findOne({ email: email });

    if (user !== null) {
      console.log("in if");
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
        votes: user.votes,
      });

      await newUser.save().then(() => {
        console.log("new Approved user saved to User Schema");
      });

      // add votes to proxy and officer

      const savedUser = await User.findOne({ email: email });
      newUser.votes.forEach(async (e) => {
      //  console.log(e);
        // add to proxy
        const proxyOfVote = await Proxy.findOne({ Proxy_code: e.proxyCode });
       // console.log(proxyOfVote);
        const proxyOfVoteDetailes = {
          userId: savedUser._id,
          officerId: e.officerId,
          voted: e.voted,
        };
        if (proxyOfVote.votes !== null) {
       //   console.log("proxy of votes :" + proxyOfVote.votes);
          await Proxy.findOneAndUpdate(
            { Proxy_code: e.proxyCode },
            { $push: { votes: proxyOfVoteDetailes } }
          );
       //   proxyOfVote.votes.push(proxyOfVoteDetailes);
          console.log("proxy votes is not null");
        } else {
          const newArray = [proxyOfVoteDetailes];
          await Proxy.findOneAndUpdate(
            { Proxy_code: e.proxyCode },
            { votes: newArray }
          );
          console.log(newArray);
        }

        // add to officer


        const officerOfVote = await Officer.findOne({ officerId: e.officerId });
        // const officerOfVoteDetailes= {userId: savedUser._id,
        //   officerId: e.officerId,
        //   voted: e.voted}

        //if officer votes null
        if (officerOfVote.votes === null) {
          console.log("officerOfVote.votes is null");
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
            },
          ];
          await Officer.findOneAndUpdate(
            { Proxy_code: e.proxyCode },
            { votes: newVotes }
          );
        } else {
          // if officer votes has an array

          // const officerOfVote = await Officer.findOne({ officerId: e.officerId });
          console.log(e.proxyCode);
          const officerProxy = await Officer.findOne(
            { $and: [  { officerId: e.officerId },{ votes: { $elemMatch: { proxyCode: e.proxyCode }}}   ] }
        //    { proxyCode: proxyCode },
         //   { votes: { $elemMatch: { proxyCode: proxyCode } } }
          );
        //  console.log(officerProxy);
          //  const officerProxy = await officerProxy.votes.findOne({ proxyCode: e.proxyCode });
          if (officerProxy === null) {
            console.log('officerProxy is null, need newProxyVotes');
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
            };
            //   await Officer.findOneAndUpdate({ Proxy_code: e.proxyCode }, {votes:newVotes})
            //   db.inventory.find( { $and: [ { price: { $ne: 1.99 } }, { price: { $exists: true } } ] } )
            //    { $inc: { no_of_likes: 1 }, "$push": { "users": userInfo } }
            await Officer.findOneAndUpdate(
              { officerId: e.officerId },
              { $push: { votes: newProxyVotes } }
            );
          }
        
         else{
             const newVoteOfficer={
            
              proxyCode: e.proxyCode,
              Security_ID : proxyOfVote.Security_ID,
              userId: savedUser._id,
              voted: e.voted
            }
          //   db.collection.update(
          //     { "_id": ID, "playlists._id": "58"},
          //     { "$push": 
          //         {"playlists.$.musics": 
          //             {
          //                 "name": "test name",
          //                 "duration": "4.00"
          //             }
          //         }
          //     }
          // )
           


            await Officer.findOneAndUpdate(
              { officerId: e.officerId, "votes.proxyCode": e.proxyCode},
             { "$push": 
             {"votes.$.allvotes": newVoteOfficer
             }
         }
            );
         }
        }
      });
      ///////////////////////////////////////////////////////////////////////////////
      // add new article to officer
      addNewArticle(user.article);
      /////////////////////////////////////////////////////////////////////////////////
      console.log("in if3");
      if (flag) {
        const updateStaus = await WaitingUser.findOneAndUpdate(
          { email: email },
          { status: "Transferred" }
        );
        res.send({
          Ok: true,
          doc: newUser,
        });
      }
    } else {
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

////////////////////////////////////////////////////////
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);

    const user = await User.findOne({ email });
    console.log("current user:", user);

    if (user === null) {
      res.send({
        ok: false,
        message: "couldnt find such a user or user is not approved yet ",
      });
    } else {
      bcrypt.compare(password, user.password, function (err, result) {
        if (result == true) {
          // redirect to location

          // if (user.password === password) {
          res.send({ login: true, doc: user });
          // }
        } else {
          res.send({ login: false, message: "Password is incorrect" });
        }
      });
    }
  } catch (e) {
    console.log("login fun bug");
  }
};
/////////////////////////////////////////////////////////////////////
async function addNewArticle(article) {
  console.log(article);
  try {
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
                  res.send({ Ok: true, doc, Articletoupdate });
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
    console.log("add article fun bug");
  }
}
