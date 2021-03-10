import React from 'react'
import Inputclass from '../Components/InputText'
import "./QuestionsBeforeRegister.css";

export default function QuestionsBeforeRegister() {
    return (
        <div>
            <h3 className="info">נתוני ההצבעה שלך שמורים במערכת</h3>
            <br></br>
             < Inputclass texter = {"שם פרטי"} ></Inputclass>
             < Inputclass texter = {"שם משפחה"} ></Inputclass>

             < Inputclass texter = {"כתובת מייל"} ></Inputclass>
             < Inputclass texter = {"מספר טלפון"} ></Inputclass>


<button className="but">הלאה</button>
        </div>
    )   
}
