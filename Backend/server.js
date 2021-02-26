const express = require("express");
const bodyParser = require("body-parser");

const officer = require("./Routers/officer");
const proxy = require("./Routers/Proxy");
const user = require("./Routers/user");
const officerSchema = require("./Schema/Officer");

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

var add = new officerSchema({
  officerId: "123",
  officeName: "ehab",
  officerImg: "///",
  officerArticles: [],
  votes: [
    {
      proxyCode: "first",
      allvotes: [],
      likesCounter: 0,
      absentCounter: 0,
      disLikesCounter: 0,
    },
  ],
});
add.save().then(() => {
  console.log("add new officer to db");
});
const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log("listen on port: ", port);
});
