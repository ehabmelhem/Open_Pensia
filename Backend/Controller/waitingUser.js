const express = require("express");
const app = express();

const WaitingUser = require("../Schema/WaitingUser");
const Officer = require("../Schema/Officer");
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

    //console.log(username, password)

    var datetime = new Date();

    const myVotes=[];
    

    //check if user exists
    const newUser = new WaitingUser({
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      password: password,
      status: "Waiting", //{Waiting/Approved}
      fundName: fundName,
      chanel: chanel,
      registerDate: datetime,
      votes: myVotes,
        article:{
            officerId:officerId,
            articleId: articleId,
            articleTitle: articleTitle,
            articleText: articleText,
            articleUrl: articleUrl,
          }

      
    });

    const user = await WaitingUser.findOne({ email: newUser.email });

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
      if (flag) { //to be removed
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
