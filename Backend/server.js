const express = require("express");
const bodyParser = require("body-parser");

const officer = require("./Routers/officer");
const proxy = require("./Routers/Proxy");
const user = require("./Routers/user");

const officerSchema = require("./Schema/Officer");
const userSchema = require("./Schema/user");



const app = express();
const mongoose = require("mongoose");
app.use(bodyParser.json());

app.use("/officer", officer);
app.use("/proxy", proxy);
app.use("/user", user);

mongoose.connect(
  "mongodb+srv://openpensia:Jq4kPbpZ2dKh0X65@cluster0.ny9vy.mongodb.net/openpensia",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("we are connected to DB");
});

// var add = new officerSchema({
//   officerId: "123",
//   officeName: "ehab",
//   officerImg: "///",
//   officerArticles: [],
//   votes: [
//     {
//       proxyCode: "first",
//       allvotes: [],
//       likesCounter: 0,
//       absentCounter: 0,
//       disLikesCounter: 0,
//     },
//   ],
// });
// add.save().then(() => {
//   console.log("add new officer to db");
// });

//app.use(addNewUser);



// async function addNewUser (req, res, next)  { //middleware
//   console.log('in fun addNewUser')

//  // const { username, password } = req.body;
//  // console.log(username, password)

//  var datetime = new Date();

//   //check if user exists
//   const newUser=new userSchema({
//     firstName: 'John',
//   lastName: 'Smith',
//   email: 'john.smith@gmail.com',
//   phone: '0503212345',
//   password: 'password111',
//   status: 'Approved', //{Waiting/Approved}
//   fundName: 'הראל',
//   chanel: 'גמל/פנסיה',
//   registerDate: datetime,
//   votes: [
//     {
//       proxyCode: '11111',
//       officerId: '22222',
//       voted: 1,
//       voteDate: datetime,
//     },
//   ]
//   });
//   const user = await User.findOne({email});


//   if (user !== null) {
//       res.send({ ok: false, message: 'user with such user name already exists' })
//   } else {

//    //   const newUser = new User({ username, password });
//      const newMyUser =newUser;
//       const user = await newMyUser.save().then(() => { console.log('user saved') })
//       res.send({ ok: true });

//   }


//   next();
//   return
// }

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log("listen on port: ", port);
});

// test
