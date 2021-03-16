import {
    //USER
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_LOGOUT,
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAILURE,
} from './actionTypes';

const initialUserState = {
    loggedIn: false,
    id: '',
    loading: false,
    error: ''
};

const UserReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            };
        case USER_LOGIN_SUCCESS:
            return {
                loggedIn: true,
                loading: false,
                id: action.payload,
                error: ''
            };
        case USER_LOGIN_FAILURE:
            return {
                loggedIn: false,
                loading: false,
                id: '',
                error: action.payload
            };
        case USER_LOGOUT:
            return initialUserState;
        case USER_SIGNUP_REQUEST:
            return {
                ...state,
                loading: true
            };
        case USER_SIGNUP_SUCCESS:
            return {
                loggedIn: true,
                loading: false,
                id: action.payload,
                error: ''
            };
        case USER_SIGNUP_FAILURE:
            return {
                loggedIn: false,
                loading: false,
                id: '',
                error: action.payload
            };
        default:
            return state;
    }
}

export default UserReducer;