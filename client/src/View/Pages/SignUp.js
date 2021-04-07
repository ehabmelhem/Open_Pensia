import React, { useState, useEffect } from "react";
import ButtonShow from "./ButtonShow";
import PersonaiInfo from "./QuestionsBeforeRegister";
import InputText from "../Components/InputText";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

//redux
import { sendSignUpUser } from "../../redux/User/UserActions";

export default function SignUp() {
  const dispatch = useDispatch();

  const [Personal, setPersonal] = useState(true);
  const [Confirm, setConfirm] = useState(false);
  const [sort, setSort] = useState("PersonalInfo");
  const [userInfo, setUserInfo] = useState({});

  const [error, setError] = useState("");

 

  function select(selectedButton) {
    switch (selectedButton) {
      case "Personal":
        setPersonal(true);
        setConfirm(false);
        setSort("PersonalInfo");
        break;

      case "Confirm":
        setPersonal(false);
        setConfirm(true);
        setSort("Confirmation");
        break;

      default:
        break;
    }
  }
  function PassToConfirm(e) {
    
   
    if(localStorage.getItem("nameprivate") != "" && localStorage.getItem("family") != "" && 
    localStorage.getItem("email") != "" && localStorage.getItem("password") != "" && localStorage.getItem("phone") != "" ) {

      setPersonal(false);
    setConfirm(true);
    setSort("Confirmation");

    //set detials to redux
    console.log(userInfo);
    dispatch(sendSignUpUser({ ...userInfo }));
    {localStorage.setItem("nameprivate","")}
    {localStorage.setItem("family","")}
    {localStorage.setItem("email","")}
    {localStorage.setItem("password","")}
    {localStorage.setItem("phone","")}

  }
    

  }
  function confirmMe(e) {
    
    
  }
  return (
    <div className="body">
      <div className="title2">
        <br></br>
        <h8 className="title5">תהליך רישום</h8>
      </div>
      <div>
        <div id="buttonsBar">
          <div id="Personal">
            {" "}
            <ButtonShow text="פרטים אישיים" selected={Personal} />{" "}
          </div>
          <div id="Confirm">
            {" "}
            <ButtonShow text="אימות נתונים" selected={Confirm} />
          </div>
        </div>

        {sort === "PersonalInfo" ? (
          <div>
            <h3 id="h3_1">נתוני ההצבעה שלך שמורים במערכת</h3>
            <br></br>
            <p className="tittleRegister">שם פרטי</p>
            <InputText
              textenglish={"nameprivate"}
              // texter={"שם פרטי"}
              userInfo={userInfo}
              setUserInfo={setUserInfo}
            ></InputText>
            <p className="tittleRegister">שם משפחה</p>
            <InputText
              textenglish={"family"}
              // texter={"שם משפחה"}
              userInfo={userInfo}
              setUserInfo={setUserInfo}
            ></InputText>
            <p className="tittleRegister">כתובת מייל</p>
            <InputText
              textenglish={"email"}
              // texter={"כתובת מייל"}
              userInfo={userInfo}
              setUserInfo={setUserInfo}
            ></InputText>
            <p className="tittleRegister">מספר טלפון</p>
            <InputText
              textenglish={"phone"}
              // texter={"מספר טלפון"}
              userInfo={userInfo}
              setUserInfo={setUserInfo}
            ></InputText>
            <p className="tittleRegister">סיסמה</p>
            <InputText
              textenglish={"password"}
              // texter={"סיסמה"}
              userInfo={userInfo}
              setUserInfo={setUserInfo}
            ></InputText>

            <br></br>
            <button type="submit" onClick={PassToConfirm} className="complete">
              הלאה
            </button>
            <div className="error"> {error}</div>
          </div>
        ) : (
          <div>
            <h3>?איך תרצ/י שנאמת אותך</h3>
            <div>

            <table style={{width:"100%"}}> 
                <tr style={{width:"100%"}}>
                <th id="radioButtonPlace">
                <input
                  className="radiobutton"
                  type="radio"
                  value="folder"
                  name="confirm"
                />
                </th>
                <th id="TextPlace">
              <h1>  אימות על ידי מסמך מזהה</h1>
              </th>
                </tr>
              </table>
              <div className="line" />
            <table style={{width:"100%"}}> 
                <tr style={{width:"100%"}}>
                <th id="radioButtonPlace">
                <input
                    className="radiobutton2"
                    type="radio"
                    value="folder"
                    name="confirm"
                  />
                </th>
                  <th id="TextPlace">
                    <h1> אימות על ידי מסלקה פנסיונית</h1>
                  </th>
                </tr>
              </table>

              <div className="line" />
            </div>
            <div className="space" />

            <Link to="/Login">
              <button className="button" onClick={confirmMe}>
                תאמתו אותי!
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
