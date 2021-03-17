import axios from 'axios';
import {
    //COMPANY
    FETCH_QUESTIONS_REQUEST,
    FETCH_QUESTIONS_SUCCESS,
    FETCH_QUESTIONS_FAILURE,
    FETCH_DEFAULT_QUESTION_REQUEST,
    FETCH_DEFAULT_QUESTION_SUCCESS,
    FETCH_DEFAULT_QUESTION_FAILURE

} from '../actionTypes';


// COMPANY Action Creators

export const fetchQuestionsRequest = () => ({
    type: FETCH_QUESTIONS_REQUEST
});

export const fetchQuestionsSuccess = (content) => ({
    type: FETCH_QUESTIONS_SUCCESS,
    payload: {
        content
    }
});

export const fetchQuestionsFailure = (error) => ({
    type: FETCH_QUESTIONS_FAILURE,
    payload: {
        error
    }
});

export const fetchDefaultQuestionRequest = () => ({
    type: FETCH_DEFAULT_QUESTION_REQUEST
});

export const fetchDefaultQuestionSuccess = (content) => ({
    type: FETCH_DEFAULT_QUESTION_SUCCESS,
    payload: {
        securityID: content.securityID,
        defaultQuestionInfo: content.defaultQuestionInfo,
    }
});

export const fetchDefaultQuestionFailure = (error) => ({
    type: FETCH_DEFAULT_QUESTION_FAILURE,
    payload: {
        error
    }
});

export const getQuestions = (Security_ID) => {
    return axios.post('/', { Security_ID });
}

export function fetchCompanyQuestions(Security_ID) {
    return dispatch => {
        dispatch(fetchQuestionsRequest());
        return getQuestions(Security_ID)
            .then(res => {
                console.log('inside the get fetchCompanyQuestions().then');
                console.log(res.data.allResult);
                dispatch(fetchQuestionsSuccess(res.data.allResult));
            })
            .catch(error => {
                dispatch(fetchQuestionsFailure(error.message));
            })
    }
}

export const getDefaultQuestion = (Security_ID) => {
    return axios.post('/proxy/get-corporate-default-question-data', { Security_ID });
}

export function fetchCompanyDefaultQuestion(Security_ID) {
    return dispatch => {
        dispatch(fetchDefaultQuestionRequest());
        return getDefaultQuestion(Security_ID)
            .then(res => {
                console.log('inside the get getDefaultQuestion().then');
                console.log(res.data.allResult);
                dispatch(fetchDefaultQuestionSuccess(res.data.allResult));
            })
            .catch(error => {
                dispatch(fetchDefaultQuestionFailure(error.message));
            })
    }
}