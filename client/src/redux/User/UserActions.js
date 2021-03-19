import axios from "axios";
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
      });
  };
}

export function fetchUserData(officerId) {
  officerId = typeof officerId === "number" ? officerId.toString() : officerId;

  return (dispatch) => {
    dispatch(fetchOfficerDataRequest());
    axios
      .get("/officer/get-officer-data", {
        officerId,
      })
      .then((res) => {
        console.log(res.data);
        let content = res.data;
        dispatch(
          fetchOfficerDataSuccess({
            officerName: content.Officers_Name,
            officerId: content.Officers_ID,
            officerBirthday: content.Oficer_Birthday,
            officerPresonalIntrest: content.Oficer_Personal_interest,
            officerEducation: content.Oficer_education,
            officerVC: content.Oficer_VC,
            officerOtherJobs: content.Oficer_Other_jobs,
            officerRelative: content.Relative,
            officerFinancialExpert: content["Financial expert"],
          })
        );
      })
      .catch((error) => {
        dispatch(fetchOfficerDataFailure(error.message));
        console.log(error.message);
        console.log("error.message");
      });
  };
}
