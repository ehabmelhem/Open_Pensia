const express = require("express");
const app = express();
const fetch = require("node-fetch");
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
  let url = `https://open-pension-tsofen.herokuapp.com/api/interests?filter[fund_name]=${fundname}&filter[Chanel]=${chanell}&page=0`;
  // let url = `https://open-pension-tsofen.herokuapp.com/api/interests`;
  const encodedURI = encodeURI(url);
  const allResult = [];
  let settings = { method: "Get" };
  await fetch(encodedURI, settings)
    .then((res) => res.json())
    .then(async (json) => {
      if (json.info.pages > 1) {
        for (let i = 1; i <= json.info.pages; i++) {
          url = `https://open-pension-tsofen.herokuapp.com/api/interests?filter[fund_name]=${fundname}}&filter[Chanel]=${chanell}&page=${i}`;
          let encodedd = encodeURI(url);
          await fetch(encodedd, settings)
            .then((r) => r.json())
            .then((data) => {
              for (var key in data.data) {
                if (data.data[key]["A AVE Vote"] > 0.05) {
                  allResult.push(data.data[key]);
                }
              }
            });
        }
      } else {
        for (var key in json.data) {
          console.log(json.data[key]);
          if (json.data[key]["A AVE Vote"] > 0.05) {
            allResult.push(json.data[key]);
          }
        }
      }
    });

  res.send({ OK: true, allResult });
  try {
  } catch (e) {
    console.log("could not run getAllFundNames in Proxy");
    res.send({ OK: false, messege: "error" });
  }
};
