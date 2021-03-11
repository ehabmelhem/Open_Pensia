const express = require("express");
const app = express();

const Proxy = require("../Schema/Proxy");

/* 
dis: get the default Questions - before SignUp
parameters: {Security_ID:String}				
return: {ok:true}, {officers:[],"Proxy_Code":"String" ,questionTopic:String, ave:Number}				
return: {ok:false}			 
*/
exports.getDefaultQuestion = async (req, res) => {
  try {
    const { Security_ID } = req.body;
    await Proxy.find({ Security_ID: Security_ID }).then((data) => {
      if (data.length === 0) {
        res.send({ Ok: false, messege: "the Security_ID did not exists" });
      } else {
        res.send({
          OK: true,
          officers: data[0].officers,
          proxyCode: data[0].Proxy_code,
          topic: data[0].Topic,
          ave: 0,
        });
      }
    });
  } catch (e) {
    res.send({
      OK: false,
      messege: "could not run getDefaultQuestion in Proxy",
    });
  }
};

exports.getQuestionBySecurId = async (req, res) => {
  try {
    const { Security_ID } = req.body;
    await Proxy.find({ Security_ID: Security_ID }).then((data) => {
      if (data.length === 0) {
        res.send({ Ok: false, messege: "the Security_ID did not exists" });
      } else {
        res.send({ OK: true, data });
      }
    });
  } catch (e) {
    res.send({
      OK: false,
      messege: "could not run getQuestionBySecurId in Proxy",
    });
  }
};
/* 
dis: get all Questions of a corporate
parameters: {Security_ID:String}				
return: {ok:true}, [{Security_ID:String}]	
return: {ok:false}			 
*/
exports.getAllQuestions = async (req, res) => {
  try {
  } catch (e) {
    console.log("could not run addArticle in Officer");
  }
};

exports.getAllFundNames = async (req, res) => {
  try {
  } catch (e) {
    console.log("could not run getAllFundNames in Proxy");
  }
};

exports.getChanellNames = async (req, res) => {
  const { fundname } = req.body;
  try {
  } catch (e) {
    console.log("could not run getAllFundNames in Proxy");
  }
};

exports.getAllCorporate = async (req, res) => {
  const { fundname, chanell } = req.body;
  try {
  } catch (e) {
    console.log("could not run getAllFundNames in Proxy");
  }
};
