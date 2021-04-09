import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  //USER
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE,
  SET_FUND_NAME,
  SET_CHANNEL_NAME
} from "../actionTypes";

//USER Actions

export const userLoginRequest = () => ({
  type: USER_LOGIN_REQUEST,
});
export const sendLogOutUserAction = ()=>(
  {
    type:USER_LOGOUT
  }
)

export const userLoginSuccess = (content) => ({
  type: USER_LOGIN_SUCCESS,
  payload: {
    _id: content._id,
    userid:content._id,
    firstName: content.firstName,
    lastName: content.lastName,
    email: content.email,
    password: content.password,
    status: content.status,
  },
});

export const userLoginFailure = (error) => ({
  type: USER_LOGIN_FAILURE,
  payload: {
    error,
  },
});

export const userLogout = () => ({
  type: USER_LOGOUT,
});

export const userSignupRequest = () => ({
  type: USER_SIGNUP_REQUEST,
});

export const userSignupSuccess = (content) => ({
  type: USER_SIGNUP_SUCCESS,
  payload: {
    _id: content._id,
    firstName: content.firstName,
    lastName: content.lastName,
    email: content.email,
    password: content.password,
    status: content.status,
  },
});

export const userSignupFailure = (error) => ({
  type: USER_SIGNUP_FAILURE,
  payload: {
    error,
  },
});

export function fetchUserData(content) {
  return (dispatch) => {
    axios
      .post("/user/login", {
        email: content.userEmail,
        password: content.userPassword,
      })
      .then((res) => {
        console.log(res.data);
        if(res.data.login === true)  
          dispatch(userLoginSuccess(res.data.doc));
          else
           dispatch(userLoginFailure("loginError"));
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(userLoginFailure(error.message));
      }); //commit 2
  };
}

export function sendSignUpUser(userData, votes,fundName, chanel) {


  return (dispatch) => {
    axios
      .post("/new-user/add-user", {
        votes,
        fundName, 
        chanel,
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        phone: userData.phone,
        password: userData.password, //need to be added in page 13
        // fundName: userfundName, //need to be updated in the page 4
        // userchanel: userchanel, //need to be updated in the page 4
        // votes: Votes,
        // newArticle: Article[0],
      })
      .then((res) => {
        console.log(res.data);
        //dispatch(userSignupSuccess(res.data)); //the server team is
      })
      .catch((error) => {
        console.log(error.message);
        ///dispatch(userLoginFailure(error.message));
      }); //commit 2
  };
}


export function sendLogOutUser() {
  return (dispatch) => {
    axios
      .post("/user/Logout", {
      })
      .then((res) => {
        console.log(res.data);
                dispatch(sendLogOutUserAction()); //the server team is 
      })
      .catch((error) => {
        console.log(error.message);
      }); 
  };
}


 
export const setFundName = (fundName)=>({
  type:SET_FUND_NAME,
  payload:{fundName}
})

export const setChannelName = (channelName)=>({
  type: SET_CHANNEL_NAME,
  payload:{channelName}

})
