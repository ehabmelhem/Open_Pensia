const mongoose = require("mongoose");

const proxyModel = mongoose.model("proxyCollection", {
  Proxy_code: String,
  Security_ID: String,
  Topic: String,
  creationDate: String,
  expiredDate: String,
  officers: [
    {
      officerId: String,
      officerName: String,
      officerImg: String,
    },
  ],
  votes: [
    {
      userId: String,
      officerId: String,
      voted: Number,
    },
  ],
  status: String, // {Open/Pending/Results}
  result: Boolean //result by default false
});

module.exports = proxyModel;
