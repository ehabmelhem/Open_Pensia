import React, { useState, useEffect } from "react";
import "./Login.css";
//user- "email":"new.test@gmail.com","password":"newtest"
import { fetchUserData } from "../../redux";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

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
      console.log(user)
    }
  }, [user]);
  function handleLogin(e) {
    e.preventDefault();
    dispatch(fetchUserData({ userEmail, userPassword }));
    console.log(user);
  }
  return (

    <div className="login-page">
      <div className="form">
        <form className="login-form" onSubmit={handleLogin}>
        <div id="divOnCircle"><div className="icon1" /></div>
          <input type="text" placeholder="דואר אלקטרוני" required onChange={(e) => {
            setEmail(e.target.value);
          }}></input>
          <input type="password" placeholder="סיסמה" required onChange={(e) => {
            setPassword(e.target.value);
          }} />
          <button onClick={handleLogin}>כניסה</button>
          <p className="message">Not registered? <Link to="/FirstPages_1">Create an account</Link></p>
        </form>
      </div>
    </div>

  );
}
export default Login;
