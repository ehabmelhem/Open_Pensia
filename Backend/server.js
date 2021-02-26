const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log("listen on port: ", port);
});
