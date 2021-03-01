const express = require("express");
const app = express();

const User = require('../Schema/User');



/* 
dis: add a new user
parameters: user info from client
return: {ok:true}
return: {ok: false,message:'could not add user'}			 
*/
exports.addUser = async (req, res) => {
    try{
  
}catch(e){
    console.log('could not run addUser in User')
}

}