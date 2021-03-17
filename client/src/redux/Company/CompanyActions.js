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
        content // need to be adjusted
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
        companyName: content.companyName,
        defaultQuestionInfo: content.defaultQuestionInfo,
    }
});

export const fetchDefaultQuestionFailure = (error) => ({
    type: FETCH_DEFAULT_QUESTION_FAILURE,
    payload: {
        error
    }
});


export function fetchCompanyQuestions(Security_ID) {
    Security_ID = typeof Security_ID === 'number' ? Security_ID.toString() : Security_ID;
    return dispatch => {

        dispatch(fetchQuestionsRequest());
        return axios.post('/', { Security_ID })
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


export function fetchCompanyDefaultQuestion(Security_ID) {
    Security_ID = typeof Security_ID === 'number' ? Security_ID.toString() : Security_ID;

    return dispatch => {

        dispatch(fetchDefaultQuestionRequest());
        return axios.post('/proxy/get-corporate-default-question-data', {
            "Security_ID": Security_ID
        })
            .then(res => {
                dispatch(fetchDefaultQuestionSuccess(res.data.allResult))
                console.log(res.data.allResult);
            })
            .catch(error => {
                dispatch(fetchDefaultQuestionFailure(error.message));
                console.log(error.message);
            });
    }
}