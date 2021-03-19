const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");

var cookieParser = require("cookie-parser");

const officer = require("./Routers/officer");
const proxy = require("./Routers/Proxy");
const user = require("./Routers/user");
const waitingUser = require("./Routers/waitingUser");

const officerSchema = require("./Schema/Officer");

const app = express();

app.use(cors());
app.use(cookieParser());

const mongoose = require("mongoose");
const userModel = require("./Schema/User");
app.use(bodyParser.json());

app.use("/officer", officer);
app.use("/proxy", proxy);
app.use("/user", user);
app.use("/new-user", waitingUser);

mongoose.connect(
  "mongodb+srv://openpensia:Jq4kPbpZ2dKh0X65@cluster0.ny9vy.mongodb.net/openpensia",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("we are connected to DB");
});

let article = {
  officerId: "64516271",
  articleId: "00000000006",
  articleTitle: "My Article my article works",
  articleText: "this is an article____my article___________",
  articleUrl: "url",
};

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

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log("listen on port: ", port);
});

// test
