import {
    //USER
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_LOGOUT,
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAILURE,
    // //COMPANIES LIST
    // FETCH_COMPANIES_REQUEST,
    // FETCH_COMPANIES_SUCCESS,
    // FETCH_COMPANIES_FAILURE,
    // //COMPANY
    // FETCH_QUESTIONS_REQUEST,
    // FETCH_QUESTIONS_SUCCESS,
    // FETCH_QUESTIONS_FAILURE,
    // //OFFICER
    // FETCH_OFFICER_DATA_REQUEST,
    // FETCH_OFFICER_DATA_SUCCESS,
    // FETCH_OFFICER_DATA_FAILURE,
    // ADD_OFFICER_ARTICLE,
    //VOTES
    ADD_VOTE,
    UPDATE_VOTE,

} from './actionTypes';

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



//OFFICER Actions

export const fetchOfficerDataRequest = () => ({
    type: FETCH_OFFICER_DATA_REQUEST
});

export const fetchOfficerDataSuccess = (content) => ({
    type: FETCH_OFFICER_DATA_SUCCESS,
    payload: {
        content
    }
});

export const fetchOfficerDataFailure = (error) => ({
    type: FETCH_OFFICER_DATA_FAILURE,
    payload: {
        error
    }
});

export const addOfficerArticle = (content) => ({
    type: ADD_OFFICER_ARTICLE,
    payload: {
        content
    }
});

//VOTES Action Types

export const addVote = (content) => ({
    type: ADD_VOTE,
    payload: {
        content
    }
});

export const updateVote = (content) => ({
    type: UPDATE_VOTE,
    payload: {
        content
    }
});


