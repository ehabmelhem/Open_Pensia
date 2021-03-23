const express = require("express");
const app = express();
const fetch = require("node-fetch");
const Proxy = require("../Schema/Proxy");
const officerModel = require("../Schema/Officer");
const User = require("../Schema/User");
const { v4: uuidv4 } = require("uuid");
<<<<<<< HEAD
const secret = "1234";
=======
const jwt =require("jwt-simple")
const secret ="1234"
>>>>>>> Dashboard_Team
/* 
dis: get the default Questions - before SignUp
parameters: {Security_ID:String}				
return: {ok:true}, {officers:[],"Proxy_Code":"String" ,questionTopic:String, ave:Number}				
return: {ok:false}			 
*/
exports.getDefaultQuestion = async (req, res) => {
  try {
    const { fundName, chanel, Security_ID } = req.body;

    await Proxy.find({ Security_ID: Security_ID }).then(async (data) => {
      if (data.length === 0) {
        res.send({ Ok: false, messege: "the Security_ID did not exists" });
      } else {
        let AVE = 1;
        let company_name = "";
        let url = `https://open-pension-tsofen.herokuapp.com/api/interests?filter[fund_name]=${fundName}&filter[Chanel]=${chanel}&filter[Security_ID]=${Security_ID}`;
        const encodedURI = encodeURI(url);
        let settings = { method: "Get" };
        await fetch(encodedURI, settings)
          .then((res) => res.json())
          .then((json) => {
            for (var key in json.data) {
              company_name = json.data[key]["company_name"];
              AVE = json.data[key]["A AVE Vote"] * 100;
            }
          });

        res.send({
          OK: true,
          officers: data[0].officers,
          proxyCode: data[0].Proxy_code,
          topic: data[0].Topic,
          company_name: company_name,
          ave: AVE,
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
//////////////////////////////////////////////////////////////
exports.getSelectedQuestion = async (req, res) => {
  try {

    const { fundName, chanel, Security_ID } = req.body;
   // console.log(fundName, chanel, Security_ID);
     let role = req.cookies.role;
     console.log(role)
     let decRole = jwt.decode(role, secret);
  
    const user = await User.findOne({ _id: decRole.name });
   // console.log(user)
    await Proxy.find({ Security_ID: Security_ID }).then(async (data) => {
      if (data.length === 0) {
        res.send({ Ok: false, messege: "the Security_ID did not exists" });
      } else {
        let AVE = 1;
        let company_name='';
        let url = `https://open-pension-tsofen.herokuapp.com/api/interests?filter[fund_name]=${fundName}&filter[Chanel]=${chanel}&filter[Security_ID]=${Security_ID}`;
        const encodedURI = encodeURI(url);
        let settings = { method: "Get" };
        await fetch(encodedURI, settings)
          .then((res) => res.json())
          .then((json) => {
            for (var key in json.data) {
              company_name = json.data[key]["company_name"] ;
              AVE = json.data[key]["A AVE Vote"] * 100;
            }
          });

        res.send({
          OK: true,
          officers: data[0].officers,
          proxyCode: data[0].Proxy_code,
          topic: data[0].Topic,
          company_name:company_name,
          ave: AVE,
          user:user
        });
      }
    });
  } catch (e) {
    console.log()
    res.send({
      OK: false,
      messege: "could not run getDefaultQuestion in Proxy",
    });
  }
};
///////////////////////////////////////////////////////////////
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
    const allResult = await allCorporates(fundname, chanell);
    res.send({ OK: true, allResult });
  } catch (e) {
    console.log("could not run getAllCorporate in Proxy");
    res.send({ OK: false, messege: "error" });
  }
};

exports.getFundInfo = async (req, res) => {
  try {
    // const { userId } = req.body;
    let role = req.cookies.role;
    let decRole = jwt.decode(role, secret);
    const user = await User.findOne({ _id: decRole.name });

    if (user === null) {
      res.send({ Ok: false, messege: "User not found" });
    } else {
      const fundOpenQuestions = await (
        await openQuestions(decRole.name, "Open")
      ).length;
      const fundPendingQuestions = await (
        await openQuestions(decRole.name, "Pending")
      ).length;

      //groupPower
      console.log("groupPower");
      const groupPower = await User.find({
        fundName: user.fundName,
        chanel: user.chanel,
      }).count();

      res.send({
        OK: true,
        firstPage: {
          fundName: user.fundName,
          chanel: user.chanel,
          fundSrc: "////",
          openVoting: fundOpenQuestions,
          waitingVoting: fundPendingQuestions,
          groupPower: groupPower,
        },
      });
    }
  } catch (e) {
    let role = req.cookies.role;
    let decRole = jwt.decode(role, secret);
    console.log(decRole.name)
    res.send({
      OK: false,
      messege: "could not run getFundInfo in Proxy",
    });
  }
};
/////////////////////////////////////////////////////////////////////
exports.getExpandedHeader = async (req, res) => {
  try {
    const { userId, Security_ID } = req.body;
    const user = await User.findOne({ _id: userId });

    // get company_name and AVE - API
    let company_name = "";
    let AVE = 1;
    let url = `https://open-pension-tsofen.herokuapp.com/api/interests?filter[fund_name]=${user.fundName}&filter[Chanel]=${user.chanel}&filter[Security_ID]=${Security_ID}`;
    const encodedURI = encodeURI(url);
    let settings = { method: "Get" };

    await fetch(encodedURI, settings)
      .then((res) => res.json())
      .then((json) => {
        for (var key in json.data) {
          company_name = json.data[key]["company_name"];
          console.log(company_name);

          AVE = json.data[key]["A AVE Vote"] * 100;
          console.log(AVE);
        }
      });

    //Votes counters
    const userVotes = user.votes;
    let resultCounter = 0;
    let OpenCounter = 0;
    let pendingCounter = 0;

    const groupBy = (key) => (userVotes) =>
      userVotes.reduce((objectsByKeyValue, obj) => {
        const value = obj[key];
        objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
        return objectsByKeyValue;
      }, {});

    const groupByProxy = groupBy("proxyCode");
    const groupedProxies = groupByProxy(userVotes);
    console.log(groupedProxies);
    for (var currentProxy in groupedProxies) {
      console.log(currentProxy);
      // result Votes
      let resultVotes = await Proxy.findOne({
        Proxy_code: currentProxy,
        result: true,
      });
      if (resultVotes !== null) resultCounter++;
    }

    OpenCounter = await Proxy.find({
      Security_ID: Security_ID,
      status: "Open",
    }).count();
    pendingCounter = await Proxy.find({
      expiredDate: { $gte: new Date() },
      result: false,
    }).count();

    res.send({
      ok: true,
      doc: {
        company_name: company_name,
        AVE: AVE,
        userOpen: OpenCounter,
        userPending: pendingCounter,
        userResults: resultCounter,
      },
    });
  } catch (e) {
    console.log("getExpandedHeader fun bug");
  }
};
////////////////////////////////////////////////////////
exports.getPendingQuestionsInFund = async (req, res) => {
  try {
    let role = req.cookies.role;
    let decRole = jwt.decode(role, secret);
    const userId = decRole.name;
  //  const { userId } = req.body;
    const allPendingQuestions = await openQuestions(userId, "Pending");

    res.send({ ok: true, doc: allPendingQuestions });
  } catch (e) {
    console.log("getPendingQuestionsInFund fun bug");
    res.send({ ok: false });
  }
};
////////////////////////////////////////////////////////
exports.getOpenQuestionsInFund = async (req, res) => {
  try {
    let role = req.cookies.role;
    let decRole = jwt.decode(role, secret);
<<<<<<< HEAD

    const userId= decRole.name

    ////////////////////////////////
    const allOpenQuestions = await openQuestions(userId, "Open");
=======

  //  const user = await User.findOne({ _id: decRole.name });

  //  const { userId } = req.body;
   const userId = decRole.name;
    const allOpenQuestions = await openQuestions(decRole.name, "Open");
>>>>>>> Dashboard_Team
    
    res.send({ ok: true, doc: allOpenQuestions });
  } catch (e) {
    console.log("getOpenQuestionsInFund fun bug");
    res.send({ ok: false });
  }
};
/////////////////////////////////////////////////////////////////
async function allCorporates(fundName, chanel) {
  try {
    console.log("getAllCorporate", fundName, chanel);
    // const { fundName,chanel } = req.body;
    let url = `https://open-pension-tsofen.herokuapp.com/api/interests?filter[fund_name]=${fundName}&filter[Chanel]=${chanel}&page=0`;
    // let url = `https://open-pension-tsofen.herokuapp.com/api/interests`;
    const encodedURI = encodeURI(url);
    const allResult = [];
    let settings = { method: "Get" };
    await fetch(encodedURI, settings)
      .then((res) => res.json())
      .then(async (json) => {
        if (json.info.pages > 1) {
          for (let i = 1; i <= json.info.pages; i++) {
            url = `https://open-pension-tsofen.herokuapp.com/api/interests?filter[fund_name]=${fundName}&filter[Chanel]=${chanel}&page=${i}`;
            let encodedd = encodeURI(url);
            await fetch(encodedd, settings)
              .then((r) => r.json())
              .then((data) => {
                console.log(data);
                for (var key in data.data) {
                  if (data.data[key]["A AVE Vote"] > 0.05) {
                    allResult.push(data.data[key]);
                  }
                }
              });
          }
          // "fundname":"הראל", "chanell":"גמל/פנסיה"
        } else {
          for (var key in json.data) {
            if (json.data[key]["A AVE Vote"] > 0.05) {
              allResult.push(json.data[key]);
            }
          }
        }
      });
    return allResult;
  } catch (e) {
    console.log("allCorporate fun bug");
  }
}
/////////////////////////////////////////////////////////////////
async function groupBy(keyValue, objectToGroup) {
  try {
    const groupBy = (key) => (objectToGroup) =>
      objectToGroup.reduce((objectsByKeyValue, obj) => {
        const value = obj[key];
        objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
        return objectsByKeyValue;
      }, {});

    const groupByKey = groupBy(keyValue);
    const groupedObject = groupByKey(objectToGroup);

    return groupedObject;
  } catch (e) {
    console.log("groupBy fun bug");
  }
}
/////////////////////////////////////////////////////////////////
async function openQuestions(userId, questiontatus) {
  //open or Pending Questions
  try {
    // status might be Open/Pending
    const user = await User.findOne({ _id: userId });

    // get all corporates
    const allCorporate = await allCorporates(user.fundName, user.chanel);
    // groupBy Security_ID
    let groupBySecurityId = [];
    if (allCorporate !== null) {
      groupBySecurityId = await groupBy("Security_ID", allCorporate);
    }
    let allOpenQuestions = [];

    await Proxy.find({ status: questiontatus }).then(async (proxies) => {
      proxies.forEach(async (proxy) => {
        if (proxy.Security_ID in groupBySecurityId) {
          console.log(proxy.Security_ID);
          await allOpenQuestions.push(proxy);
        }
      });
    });
    return allOpenQuestions;
  } catch (e) {
    console.log("openQuestions fun bug");
  }
}
/////////////////////////////////////////////////////////////////

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
          newOfficers = [];
          for (key in data.data) {
            newOfficers.push({
              officerId: data.data[key].Officers_ID,
              officerName: data.data[key].Officers_Name,
              officerImg: "///",
            });
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
}, 2400000);
// 10000
// i changed it just to stop update while coding

// setInterval(async () => {
//   await Proxy.find({}).then(async (data) => {
//     data.map(async (proxy) => {
//       var date = new Date(proxy.expiredDate);
//       if (new Date() > date) {
//         await Proxy.update(
//           { Proxy_code: proxy.Proxy_code },
//           { status: "Pending" }
//         ).then(() => {
//           console.log("update Status Proxy");
//         });
//       }
//     });
//   });
// }, 86400000);
// // 86400000
///////////////////////////////////////////////////////////////////////

//  we have to update the cookies to be the userId
