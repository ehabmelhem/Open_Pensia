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
    
      
    
    setPersonal(false);
    setConfirm(true);
    setSort("Confirmation");

    //set detials to redux
    console.log(userInfo);
    dispatch(sendSignUpUser({ ...userInfo }));
    
  }
  function confirmMe(e) {
    console.log(localStorage.getItem("nameprivate"));
    console.log(localStorage.getItem("family"));
    console.log(localStorage.getItem("email"));
    console.log(localStorage.getItem("password"));
    console.log(localStorage.getItem("phone"));
    
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
            <h3>נתוני ההצבעה שלך שמורים במערכת</h3>
            <br></br>
            <InputText
              textenglish={"firstName"}
              texter={"שם פרטי"}
              userInfo={userInfo}
              setUserInfo={setUserInfo}
            ></InputText>
            <InputText
              textenglish={"lastName"}
              texter={"שם משפחה"}
              userInfo={userInfo}
              setUserInfo={setUserInfo}
            ></InputText>

            <InputText
              textenglish={"email"}
              texter={"כתובת מייל"}
              userInfo={userInfo}
              setUserInfo={setUserInfo}
            ></InputText>
            <InputText
              textenglish={"phone"}
              texter={"מספר טלפון"}
              userInfo={userInfo}
              setUserInfo={setUserInfo}
            ></InputText>
            <InputText
              textenglish={"password"}
              texter={"סיסמה"}
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
              <h1>
                <input
                  className="radiobutton"
                  type="radio"
                  value="folder"
                  name="confirm"
                />{" "}
                אימות על ידי מסמך מזהה
              </h1>
              <div className="line" />
              <h1>
                <input
                  className="radiobutton2"
                  type="radio"
                  value="folder"
                  name="confirm"
                />
                אימות על ידי מסלקה פנסיונית
              </h1>
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
