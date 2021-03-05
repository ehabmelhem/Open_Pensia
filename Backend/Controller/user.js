const express = require("express");
const app = express();

const User = require("../Schema/User");

/* 
dis: add a new user
parameters: user info from client
return: {ok:true}
return: {ok: false,message:'could not add user'}			 
*/
exports.addUser = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      password,
      fundName,
      chanel,
      vote,
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
      votes: [
        {
          proxyCode: vote.proxyCode,
          officerId: vote.officerId,
          voted: vote.voted,
          voteDate: datetime,
        },
      ],
    });
    const user = await User.findOne({ email: newUser.email });

    if (user !== null) {
      //    res.send({ ok: false, message: 'user with such user name already exists' })
      console.log("user with such user name already exists");
    } else {
      //   const newUser = new User({ username, password });

      await newUser.save().then(() => {
        console.log("user saved");
      });
      // res.send({ ok: true });
    }

    res.send({
      Ok: true,
    });
  } catch (e) {
    console.log("could not run addUser in User");
    res.send({ Ok: false });
  }
};
