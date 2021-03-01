const express = require("express");
const app = express();

const Proxy = require('../Schema/Proxy');


/* 
dis: get the default Questions - before SignUp
parameters: {Security_ID:String}				
return: {ok:true}, {officers:[],"Proxy_Code":"String" ,questionTopic:String, ave:Number}				
return: {ok:false}			 
*/
exports.getDefaultQuestion = async (req, res) => {
    try {


    } catch (e) {
        console.log('could not run addArticle in Officer')
    }

}

/* 
dis: get all Questions of a corporate
parameters: {Security_ID:String}				
return: {ok:true}, [{Security_ID:String}]	
return: {ok:false}			 
*/
exports.getAllQuestions = async (req, res) => {
    try {




    } catch (e) {
        console.log('could not run addArticle in Officer')
    }

}
