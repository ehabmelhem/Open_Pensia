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
  userid: "",
  userFirstName: "",
  userlastName: "",
  userEmail: "",
  userPassword: "",
  userStatus: "",
  userfundName: "",
  userchanel: "",
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
        ...state,
        userid: action.payload._id,
        userFirstName: action.payload.firstName,
        userlastName: action.payload.lastName,
        userEmail: action.payload.email,
        userPassword: action.payload.password,
        userStatus: action.payload.status,
        login:true,
        loading: false,
        error: "",
      };
    case USER_LOGIN_FAILURE:
      return {
        userid:"",
        userFirstName: "",
        userlastName: "",
        userEmail: "",
        userPassword: "",
        userStatus: "",
        login:false,
        loading: false,
        error: action.payload.error,
      };
    case USER_LOGOUT:
      console.log(USER_LOGOUT)
      return {
        userid:"",
        userFirstName: "",
        userlastName: "",
        userEmail: "",
        login:false,
        userPassword: "",
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
        userid: action.payload._id,
        userFirstName: action.payload.firstName,
        userlastName: action.payload.lastName,
        userEmail: action.payload.email,
        userPassword: action.payload.password,
        userStatus: action.payload.status,
        loading: false,
        error: "",
      };
    case USER_SIGNUP_FAILURE:
      return {
        userid: "",
        userFirstName: "",
        userlastName: "",
        userEmail: "",
        userPassword: "",
        userStatus: "",
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default UserReducer;
