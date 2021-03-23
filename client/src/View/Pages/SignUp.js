import React, { useState, useEffect } from 'react';
import ButtonShow from './ButtonShow'
import PersonaiInfo from './QuestionsBeforeRegister'
import Inputclass from '../Components/InputText'
import './SignUp.css';
export default function SignUp() {
    const [Personal, setPersonal] = useState(true);
    const [Confirm, setConfirm] = useState(false);
    const [sort, setSort] = useState("PersonalInfo");

    function select(selectedButton) {
        switch (selectedButton) {
            case 'Personal':
                setPersonal(true);
                setConfirm(false);
                setSort("PersonalInfo")
                break;

            case 'Confirm':
                setPersonal(false);
                setConfirm(true);
                setSort("Confirmation")
                break;


            default:
                break;
        }
    }
    function PassToConfirm(e) {
        setPersonal(false)
        setConfirm(true)
        setSort("Confirmation")
    }
    function confirmMe(e) {
        console.log(localStorage.getItem("nameprivate"))
        console.log(localStorage.getItem("family"))
        console.log(localStorage.getItem("email"))
        console.log(localStorage.getItem("password"))
        console.log(localStorage.getItem("phone"))
    }
    return (
        <div className="body">
            <div className="title2"><h8 className="title5">תהליך רישום</h8></div>
            <div >
                <div id="buttonsBar">
                    <div id="Personal" > <ButtonShow text="פרטים אישיים" selected={Personal} /> </div>
                    <div id="Confirm" > <ButtonShow text="אימות נתונים" selected={Confirm} /></div>
                </div>

                {sort === "PersonalInfo" ?
                    <div>
                        <h3 >נתוני ההצבעה שלך שמורים במערכת</h3>
                        <br></br>
                        < Inputclass textenglish={"nameprivate"} texter={"שם פרטי"} ></Inputclass>
                        < Inputclass textenglish={"family"} texter={"שם משפחה"} ></Inputclass>

                        < Inputclass textenglish={"email"} texter={"כתובת מייל"} ></Inputclass>
                        < Inputclass textenglish={"password"} texter={"סיסמה"} ></Inputclass>
                        < Inputclass textenglish={"phone"} texter={"מספר טלפון"} ></Inputclass>

                        <br></br>
                        <button onClick={PassToConfirm} className="complete">הלאה</button>
                    </div>
                    : <div><h3 >?איך תרצ/י שנאמת אותך</h3>
                        <div >
                            <h1>
                                <input className="radiobutton" type="radio" value="folder" name="confirm" /> אימות על ידי מסמך מזהה
                      </h1>
                            <div className="line" />
                            <h1>
                                <input className="radiobutton2" type="radio" value="folder" name="confirm" />אימות על ידי מסלקה פנסיונית
                      </h1>
                            <div className="line" />
                        </div>
                        <div className="space"/>
                        <button className="button" onClick={confirmMe}>תאמתו אותי!</button></div>}



            </div>
        </div>
    )
}
