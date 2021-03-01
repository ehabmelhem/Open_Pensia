const express = require("express");
const app = express();

const Officer = require('../Schema/Officer');



/* 
dis: add a new article
parameters: {"officerId":"String" ,"articleTitle":"String","articleText":"String","articleURL":"String"}			
return: {ok:true}
return: {ok:false}			 
*/
exports.addArticle = async (req, res) => {
    try{
  
}catch(e){
    console.log('could not run addArticle in Officer')
}

}