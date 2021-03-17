const mongoose = require("mongoose");

const userModel = mongoose.model("userCollection", {
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  password: String,
  status: String, //{Waiting/Approved}
  fundName: String,
  chanel: String,
  registerDate: String,
  votes: [
    {
      proxyCode: String,
      officerId: String,
      voted: Number,
      voteDate: String
    },
  ],
});

module.exports = userModel;
