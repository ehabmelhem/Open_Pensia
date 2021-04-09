const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
var cookieParser = require("cookie-parser");
const app = express();
app.use(express.static("client/build"));
const officer = require("./Routers/officer");
const proxy = require("./Routers/Proxy");
const user = require("./Routers/user");
const waitingUser = require("./Routers/waitingUser");

const officerSchema = require("./Schema/Officer");

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

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log("listen on port: ", port);
});

// test
