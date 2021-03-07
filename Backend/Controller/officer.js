const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");

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
