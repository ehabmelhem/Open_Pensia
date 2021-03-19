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
    type: USER_LOGIN_REQUEST
});

export const userLoginSuccess = (content) => ({
    type: USER_LOGIN_SUCCESS,
    payload: {
        content
    }
});

export const userLoginFailure = (error) => ({
    type: USER_LOGIN_FAILURE,
    payload: {
        error
    }
});

export const userLogout = () => ({
    type: USER_LOGOUT,
});

export const userSignupRequest = () => ({
    type: USER_SIGNUP_REQUEST
});

export const userSignupSuccess = (content) => ({
    type: USER_SIGNUP_SUCCESS,
    payload: {
        content
    }
});

export const userSignupFailure = (error) => ({
    type: USER_SIGNUP_FAILURE,
    payload: {
        error
    }
});

