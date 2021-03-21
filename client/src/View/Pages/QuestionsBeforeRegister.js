
import React, { useState, useEffect } from 'react';
import Inputclass from '../Components/InputText'
import "./QuestionsBeforeRegister.css";


export default function QuestionsBeforeRegister() {
  const [name,setname]=useState("")
    const [user,setuser]=useState({firstName: String,
        lastName: String,   
        email: String,
        phone: String,
        password: String,
        status: String, //{Waiting/Approved}
        fundName: String,
        chanel: String,
        registerDate: String,
        
        
    });
 
    const savePersonalInfo = (e) => {
        e.preventDefault();
        setuser({firstName : "kabha" , lastName : "rwed" , email : "kabha" , phone : "052658821" , password : "asdasd", status : "true", fundName : "ddd",chanel : "fsde",registerDate : "arab"})
            fetch("http://localhost:3002/new-user/add-user", {
              method: "POST",
              headers: {
                "Accept": "application/json; odata=verbose",
                "Content-Type": "application/json",
              },

              body: JSON.stringify({ userinformation : user }),

            })
              .then((r) => r.json())
              .then((data) => {
               console.log("A")
              });
    }
    return (
        <div>
            <h3 className="info">נתוני ההצבעה שלך שמורים במערכת</h3>
            <br></br>
             < Inputclass textenglish  = {"nameprivate"}  texter = {"שם פרטי"} ></Inputclass>
             < Inputclass textenglish  = {"family"}  texter = {"שם משפחה"} ></Inputclass>

             < Inputclass textenglish  = {"email"}  texter = {"כתובת מייל"} ></Inputclass>
             < Inputclass textenglish  = {"phone"}  texter = {"מספר טלפון"} ></Inputclass>

         
<button  onClick= {savePersonalInfo} className="but">הלאה</button>
        </div>
    )   
    }