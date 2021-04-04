import React, { useState, useEffect } from "react";
import "./Login.css";
//user- "email":"new.test@gmail.com","password":"newtest"
import { fetchUserData } from "../../redux";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

function Login(props) {
  const dispatch = useDispatch();
  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  let user = useSelector((state) => !!state.UserReducer && state.UserReducer);
  const history = useHistory();
  useEffect(() => {
    if (user.login === true) {
      history.push("/AfterRegistrationVoting");
      console.log("worked");
    }
  }, [user]);
  function handleLogin(e) {
    e.preventDefault();
    dispatch(fetchUserData({ userEmail, userPassword }));
    console.log(user);
  }
  return (
   
        <div class="login-page">
  <div class="form">
    
    <form class="login-form">
      <input type="text" placeholder="דואר אלקטרוני" required onChange={(e) => {
            setEmail(e.target.value);
          }}/>
      <input type="password" placeholder="סיסמה"  required onChange={(e) => {
            setPassword(e.target.value);
          }}/>
      <button onClick={handleLogin}>כניסה</button>
      <p class="message">Not registered? <a href="#">Create an account</a></p>
    </form>
  </div>
</div>
        
  );
}
export default Login;
