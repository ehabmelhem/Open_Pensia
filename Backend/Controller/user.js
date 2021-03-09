const express = require("express");
const app = express();

const User = require("../Schema/User");
const Officer = require("../Schema/Officer");
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
