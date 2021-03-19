import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE,
} from "../actionTypes";

const initialState = {
  userFirstName: "",
  userlastName: "",
  userEmail: "",
  userStatus: "",
  loading: false,
  error: "",
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        userFirstName: action.payload.firstName,
        userlastName: action.payload.lastName,
        userEmail: action.payload.email,
        userStatus: action.payload.status,
        loading: false,
        error: "",
      };
    case USER_LOGIN_FAILURE:
      return {
        userFirstName: "",
        userlastName: "",
        userEmail: "",
        userStatus: "",
        loading: false,
        error: action.payload.error,
      };
    case USER_LOGOUT:
      return {
        userFirstName: "",
        userlastName: "",
        userEmail: "",
        userStatus: "",
        loading: false,
      };

    case USER_SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_SIGNUP_SUCCESS:
      return {
        userFirstName: action.payload.firstName,
        userlastName: action.payload.lastName,
        userEmail: action.payload.email,
        userStatus: action.payload.status,
        loading: false,
        error: "",
      };
    case USER_SIGNUP_FAILURE:
      return {
        userFirstName: "",
        userlastName: "",
        userEmail: "",
        userStatus: "",
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default UserReducer;
