const express = require("express");
const app = express();

const WaitingUser = require("../Schema/WaitingUser");
const Officer = require("../Schema/Officer");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

// var salt =10 //any random value
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
exports.addWaitingUser = async (req, res) => {
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

    console.log(req.body);
    var datetime = new Date();

    // bcrypt.hash(password, salt, (err, encrypted) => {
    //   password = encrypted
    //   next()
    //   })
    console.log(password);
    let hash_password = await hashPassword(password);
    console.log(hash_password);

    /** */
    // const newVotes = [];
    // votes.forEach((e) => {
    //   let oneVote = {
    //     proxyCode: e.proxyCode,
    //     officerId: e.officerId,
    //     voted: e.voted,
    //     voteDate: datetime,
    //   };
    //   newVotes.push(oneVote);
    // });

    //check if user exists
    const newUser = new WaitingUser({
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      password: hash_password,
      status: "Waiting", //{Waiting/Approved}
      fundName: fundName,
      chanel: chanel,
      // registerDate: datetime,
      votes,
      article: {
        //   officerId: newArticle.officerId,
        articleId: uuidv4(),
        //   articleTitle: newArticle.articleTitle,
        //   articleText: newArticle.articleText,
        //   articleUrl: newArticle.articleUrl,
        //   articleStatus: "Approved", //{"Waiting","Approved","declined"}
      },
    });

    const user = await WaitingUser.findOne({ email: newUser.email });

    if (user !== null) {
      console.log("user with such user name already exists");
      res.send({
        Ok: false,
        message: "user with such user name already exists",
      });
    } else {
      await newUser.save().then(doc => {
        console.log("user saved");
        console.log(doc)
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
      if (flag) {
        //to be removed
        res.send({
          Ok: true,
          doc: newUser,
        });
      }
    }
  } catch (e) {
    console.log(e);
    console.log("could not run addUser in waiting User");
    res.send({ Ok: false });
  }
};

async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  console.log(hash);
  return hash;
}
