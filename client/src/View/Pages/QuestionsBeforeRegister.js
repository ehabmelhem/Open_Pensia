import React from 'react'
import Inputclass from '../Components/InputText'
import "./QuestionsBeforeRegister.css";

export default function QuestionsBeforeRegister() {
    const [user,setuser]=useState({firstName: String,
        lastName: String,
        email: String,
        phone: String,
        password: String,
        status: String, //{Waiting/Approved}
        fundName: String,
        chanel: String,
        registerDate: String,
        votes: [
          {
            proxyCode: String,
            officerId: String,
            voted: Number,
            voteDate: String
          },
        ],});
 
    const lotery = (e) => {
        e.preventDefault();
            fetch("/update-user", {
              method: "POST",
              headers: {
                "Accept": "application/json; odata=verbose",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ isname: allname }),
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

         
<button  onClick= {sendinfo} className="but">הלאה</button>
        </div>
    )   
}
