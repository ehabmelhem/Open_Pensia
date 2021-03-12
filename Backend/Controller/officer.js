const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");
const fetch = require('node-fetch');

const Officer = require("../Schema/Officer");
//const lib = require("./lib");

/* 
dis: add a new article
parameters: {"officerId":"String" ,"articleTitle":"String","articleText":"String","articleURL":"String"}			
return: {ok:true}
return: {ok:false}			 
*/
exports.addArticle = async (req, res) => {
  try {
    const { officerId, articleTitle, articleText, articleUrl } = req.body;
    let articleStatus='Approved'
    let article={officerId, articleTitle, articleText, articleUrl,articleStatus}
   // let resArticle=addNewArticle(article);
   // console.log(article);

    if (article !== null) {
      await Officer.find({ officerId: article.officerId }).then(
        async (data) => {
          if (data.length !== 0) {
            if (article.articleStatus === 'Approved') {
              const allArticle = data[0].officerArticles;
              const Articletoupdate = {
                articleId: uuidv4(),
                articleTitle: article.articleTitle,
                articleText: article.articleText,
                articleUrl: article.articleUrl,
                articleStatus: article.articleStatus
              };
              allArticle.push(Articletoupdate);
              await Officer.update(
                { officerId: data[0].officerId },
                { officerArticles: allArticle }
              )
                .then(() => {
                  console.log("update new article");
                  res.send({ Ok: true, doc: Articletoupdate });
                })
                .catch((e) => {
                  console.log("we cant update the Article");
                  flag = false;
                  res.send({
                    Ok: false,
                    messege: "error to update article",
                  });
                });
            }
          }
        }
      );
    }
  } catch (e) {
    console.log("could not run addArticle in Officer");
    res.send({ Ok: false, messege: "could not run addArticle in Officer" });
  }
};

async function addNewArticle(article) {
};
// module.exports = { addNewArticle };
////////////////////////////////////////////////////////
exports.officerData = async (req, res) => {
  try {
    const {officerId} = req.body;
    console.log(officerId)

   // http://open-pension-tsofen.herokuapp.com/api/proxies?filter[Officers_ID]=64516271
    let url = "http://open-pension-tsofen.herokuapp.com/api/proxies?filter[Officers_ID]="+officerId;
  //  let url="http://open-pension-tsofen.herokuapp.com/api/interests"

    let settings = { method: "Get" };

    fetch(url, settings)
      .then(res => res.json())
      .then((json) => {
        res.send({ok: true,doc:json.data })
        // do something with JSON
      });

  } catch (e) {
    console.log('officerData fun bug');
  }
}
