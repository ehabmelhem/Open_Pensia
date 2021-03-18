const express = require("express");
const app = express();
const fetch = require("node-fetch");
const Proxy = require("../Schema/Proxy");
const officerModel = require("../Schema/Officer");
const User = require("../Schema/User");
const { v4: uuidv4 } = require("uuid");
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
        console.log(data);
        res.send({ Ok: false, messege: "the Security_ID not found" });
      } else {
        res.send({ OK: true, doc: data });
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
    console.log(e);
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
                  chaneles.add(data.data[key]["Chanel"]); //1
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
    console.log("getAllCorporate");
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

exports.getFundInfo = async (req, res) => {
  // TODO:
   //    ,openVoting:fundOpenQuestions
      //    ,waitingVoting:"Number"

  try {
    const {userId} = req.body;

     const user = await User.findOne({_id:userId})
     console.log(user)
      if (user === null) {
        res.send({ Ok: false, messege: "User not found" });
      } else {
        // {ok:true,firstPage:{"fundName":"String","chanel":"String","fundSrc":"String",
        // "openVoting":"Number","waitingVoting":"Number","groupPower":"Number"}}

        // get openVoting and waitingVoting
       const openQuestions= await Proxy.find({"status":"Open"})
       console.log(openQuestions)
///////////////////////////////////////////////////////////////////////////////////////////////
       // get list of corporates
      // const allCorporates=this.getAllCorporate({ fundname:user.fundName, chanell:user.chanel })
      console.log("getAllCorporate");
    //  const { fundname, chanell } = req.body;
      let url = `https://open-pension-tsofen.herokuapp.com/api/interests?filter[fund_name]=${user.fundName}&filter[Chanel]=${user.chanel}&page=0`;
      // let url = `https://open-pension-tsofen.herokuapp.com/api/interests`;
      const encodedURI = encodeURI(url);
      const allResult = [];
      let settings = { method: "Get" };
      await fetch(encodedURI, settings)
        .then((res) => res.json())
        .then(async (json) => {
          console.log("in");
          if (json.info.pages > 1) {
            for (let i = 1; i <= json.info.pages; i++) {
              console.log("in2");
             // https://open-pension-tsofen.herokuapp.com/api/interests?filter[fund_name]=%D7%94%D7%A8%D7%90%D7%9C&filter[Chanel]=%D7%92%D7%9E%D7%9C/%D7%A4%D7%A0%D7%A1%D7%99%D7%94&page=1
              url = `https://open-pension-tsofen.herokuapp.com/api/interests?filter[fund_name]=${user.fundName}}&filter[Chanel]=${user.chanel}&page=${i}`;
              let encodedd = encodeURI(url);
              await fetch(encodedd, settings)
                .then((r) => r.json())
                .then((data) => {
                  console.log(data.data)
                  for (var key in data.data) { // error is here, it could not enter the for loop
                    // 
                    console.log('in for')
                    console.log(data.data[key]["A AVE Vote"])
                    if (data.data[key]["A AVE Vote"]*10000 > 0.05) {
                      console.log("in3");
                      allResult.push(data.data[key]);
                    }
                  }
                });
            }
          } else {
            for (var key in json.data) {
              if (json.data[key]["A AVE Vote"] > 0.05) {
                console.log("in4");
                allResult.push(json.data[key]);
              }
            }
          }
        });
  ///////////////////////////////////////////////////////////////////////////////////////////////////
 // const fundOpenQuestions = openQuestions.filter(item => allResult.Security_ID.includes(item.Security_ID)).count();
  
  
  // res.send({ OK: true, allResult });
      ////////////////////////////////////////////////////////////
      
      // groupPower
      console.log('groupPower')
      const groupPower = await User.find({fundName:user.fundName, chanel:user.chanel}).count()
      console.log(groupPower)
 







          res.send({
            OK: true,firstPage:{fundName:user.fundName,chanel:user.chanel,fundSrc:"////"
      //    ,openVoting:fundOpenQuestions
      //    ,waitingVoting:"Number"
      ,groupPower:groupPower
          
          
          }
          });
        

        

        
      }
    // res.send({
    //   OK: false
    // });


  } catch (e) {
    res.send({
      OK: false,
      messege: "could not run getFundInfo in Proxy",
    });
  }
};

setInterval(async () => {
  let url = `http://open-pension-tsofen.herokuapp.com/api/dimProxies`;
  const encodedURI = encodeURI(url);
  let settings = { method: "Get" };
  var allResult = [];
  await Proxy.find({}).then((data) => {
    allResult = [...data];
  });
  var APIResult = [];
  await fetch(encodedURI, settings)
    .then((r) => r.json())
    .then((data) => {
      for (key in data.data) {
        APIResult.push(data.data[key]);
      }
    });
  //Proxy_code
  APIResult.map((elm) => {
    // Proxy_Code
    const proxy = allResult.find(
      (elment) => elment.Proxy_code === elm.Proxy_Code
    );
    var date = new Date();
    if (!proxy) {
      const save = new Proxy({
        Proxy_code: elm.Proxy_Code,
        Security_ID: elm.Security_ID,
        Topic: elm.Topic,
        creationDate: date,
        expiredDate: elm.Date,
        officers: [],
        votes: [],
        status: "Open",
        result: false,
      });
      save.save().then(() => {
        console.log("save new Question into proxies");
      });
    }
  });
  // console.log("---------");
  await Proxy.find({}).then((data) => {
    allResult = [...data];
  });
  let allOfficers = [];
  await officerModel.find({}).then((data) => {
    allOfficers = [...data];
  });
  // console.log(allOfficers[0].officerId);
  allResult.map(async (elm) => {
    //  console.log(elm.Proxy_code);
    let url = `http://open-pension-tsofen.herokuapp.com/api/proxies?filter[Proxy_Code]=${elm.Proxy_code}`;
    let settings = { method: "Get" };
    await fetch(url, settings)
      .then((r) => r.json())
      .then(async (data) => {
        if (Object.keys(data.data).length !== 0) {
          var newOfficers = [];
          allOfficers.map((elm) => {
            /*
                  officerId: String,
      officerName: String,
      officerImg: String
            */
            newOfficers.push({
              officerId: elm.officerId,
              officerName: elm.officeName,
              officerImg: "///",
            });
          });
          var localOfficers = [];
          for (key in data.data) {
            const officer = allOfficers.find(
              (offic) => offic.officerId == data.data[key].Officers_ID
            );
            if (!officer) {
              let obj = {
                officerId: data.data[key].Officers_ID,
                officerName: data.data[key].Officers_Name,
                officerImg: "///",
              };
              // console.log(obj.officerName);

              localOfficers.push({
                officerId: data.data[key].Officers_ID,
                officeName: data.data[key].Officers_Name,
                officerImg: "///",
                officerArticles: [{ articleId: uuidv4() }],
                votes: [],
              });
              newOfficers.push(obj);
            }
          }
          await Proxy.update(
            { Proxy_code: elm.Proxy_code },
            { officers: newOfficers }
          ).then(() => {
            //  console.log("update proxy");
          });

          localOfficers.map((officer) => {
            var save = new officerModel(officer);
            save.save().then(() => {
              // console.log("save new officer into db");
            });
          });
          // 64516271
          // 64516271
        }
      });
  });
  // http://open-pension-tsofen.herokuapp.com/api/proxies?filter[Proxy_Code]=520040700/1
}, 1000000);
// 10000
// i changed it just to stop update while coding
