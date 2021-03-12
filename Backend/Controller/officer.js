const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");
const fetch = require('node-fetch');

const Officer = require("../Schema/Officer");

/* 
dis: add a new article
parameters: {"officerId":"String" ,"articleTitle":"String","articleText":"String","articleURL":"String"}			
return: {ok:true}
return: {ok:false}			 
*/
exports.addArticle = async (req, res) => {
  try {
    const { officerId, articleTitle, articleText, articleURL } = req.body;
    await Officer.find({ officerId: officerId }).then(async (data) => {
      if (data.length !== 0) {
        const allArticle = data[0].officerArticles;
        const Articletoupdate = {
          articleId: uuidv4(),
          articleTitle: articleTitle,
          articleText: articleText,
          articleUrl: articleURL,
        };
        allArticle.push(Articletoupdate);
        await Officer.update(
          { officerId: data[0].officerId },
          { officerArticles: allArticle }
        )
          .then(() => {
            console.log("update new article");
            res.send({ Ok: true, doc, Articletoupdate });
          })
          .catch((e) => {
            res.send({ Ok: false, messege: e });
          });
      }
    });
  } catch (e) {
    console.log("could not run addArticle in Officer");
    res.send({ Ok: false, messege: "could not run addArticle in Officer" });
  }
};

function addNewArticle() {

}
////////////////////////////////////////////////////////
exports.officerData = async (req, res) => {
  try {
    const {officerId} = req.body;
    console.log(officerId)

   // http://open-pension-tsofen.herokuapp.com/api/proxies?filter[Officers_ID]=64516271
    let url = "http://open-pension-tsofen.herokuapp.com/api/proxies?filter[Officers_ID]="+officerId;

    let settings = { method: "Get" };

    fetch(url, settings)
      .then(res => res.json())
      .then((json) => {
        res.send({ok: true,doc:json })
        // do something with JSON
      });

  } catch (e) {
    console.log('officerData fun bug');
  }
}
