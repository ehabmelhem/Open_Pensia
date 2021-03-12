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
// {FundName:[]} Set
exports.getAllFundNames = async (req, res) => {
  try {
    //const { fundname } = req.body;
    let url = `https://open-pension-tsofen.herokuapp.com/api/interests?page=0`;
    const encodedURI = encodeURI(url);
    let settings = { method: "Get" };
    const fundnames = new Set();
    await fetch(encodedURI, settings)
      .then((res) => res.json())
      .then(async (json) => {
        if (json.info.pages > 1) {
          for (let i = 1; i <= json.info.pages; i++) {
            url = `https://open-pension-tsofen.herokuapp.com/api/interests?page=${i}`;
            let encodedd = encodeURI(url);
            await fetch(encodedd, settings)
              .then((r) => r.json())
              .then((data) => {
                for (var key in data.data) {
                  fundnames.add(data.data[key]["fund_name"]);
                }
              });
          }
        } else {
          for (var key in json.data) {
            fundnames.add(json.data[key]["fund_name"]);
          }
        }
      });
    const allResult = Array.from(fundnames);
    res.send({ OK: true, fund_name: allResult });
  
  } catch (e) {
    console.log("could not run getAllFundNames in Proxy");
    console.log(e)
    res.send({ OK: false, messege: "error" });
  }
};

exports.getChanellNames = async (req, res) => {
  try {
    const { fundname } = req.body;
    let url = `https://open-pension-tsofen.herokuapp.com/api/interests?filter[fund_name]=${fundname}&page=0`;
    const encodedURI = encodeURI(url);
    let settings = { method: "Get" };
    const chaneles = new Set();
    await fetch(encodedURI, settings)
      .then((res) => res.json())
      .then(async (json) => {
        if (json.info.pages > 1) {
          for (let i = 1; i <= json.info.pages; i++) {
            url = `https://open-pension-tsofen.herokuapp.com/api/interests?filter[fund_name]=${fundname}&page=${i}`;
            let encodedd = encodeURI(url);
            await fetch(encodedd, settings)
              .then((r) => r.json())
              .then((data) => {
                for (var key in data.data) {
                  chaneles.add(data.data[key]["Chanel"]);
                }
              });
          }
        } else {
          for (var key in json.data) {
            chaneles.add(json.data[key]["Chanel"]);
          }
        }
      });
    const allResult = Array.from(chaneles);
    res.send({ OK: true, chaneles: allResult });
  } catch (e) {
    console.log("could not run getAllFundNames in Proxy");
    res.send({ OK: false, messege: "error" });
  }
};
// return {Coeporate:[]}
exports.getAllCorporate = async (req, res) => {
  try {
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
            if (json.data[key]["A AVE Vote"] > 0.05) {
              allResult.push(json.data[key]);
            }
          }
        }
      });

    res.send({ OK: true, allResult });
  } catch (e) {
    console.log("could not run getAllFundNames in Proxy");
    res.send({ OK: false, messege: "error" });
  }
};
