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
} from "../actionTypes";

//USER Actions

export const userLoginRequest = () => ({
  type: USER_LOGIN_REQUEST,
});

export const userLoginSuccess = (content) => ({
  type: USER_LOGIN_SUCCESS,
  payload: {
    _id: content._id,
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
        dispatch(userLoginSuccess(res.data));
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(userLoginFailure(error.message));
      });//commit 2
  };
}

// export function fetchSignUpUser(content) {
//   let userfundName = useSelector((state) => state.UserReducer.userfundName);
//   let userchanel = useSelector((state) => state.UserReducer.userchanel);
//   let Votes = useSelector((state) => state.VotesReducer.votes);
//   let Article = useSelector((state) => state.OfficerReducer.articles);

//   return (dispatch) => {
//     axios
//       .post("/new-user/add-user", {
//         firstName: content.firstName,
//         lastName: content.lastName,
//         email: content.userEmail,
//         phone: content.phone,
//         password: content.userPassword, //need to be added in page 13
//         fundName: userfundName, //need to be updated in the page 4
//         userchanel: userchanel, //need to be updated in the page 4
//         votes: Votes,
//         newArticle: Article[0],
//       })
//       .then((res) => {
//         console.log(res.data);
//         //dispatch(userSignupSuccess(res.data)); //the server team is 
//       })
//       .catch((error) => {
//         console.log(error.message);
//         ///dispatch(userLoginFailure(error.message));
//       }); //commit 2
//   };
// }


