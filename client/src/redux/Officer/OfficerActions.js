import axios from 'axios';
import {
    //OFFICER
    FETCH_OFFICER_DATA_REQUEST,
    FETCH_OFFICER_DATA_SUCCESS,
    FETCH_OFFICER_DATA_FAILURE,
    ADD_OFFICER_ARTICLE,

} from '../actionTypes';


// COMPANY Action Creators

export const fetchOfficerDataRequest = () => ({
    type: FETCH_OFFICER_DATA_REQUEST
});

export const fetchOfficerDataSuccess = (content) => ({
    type: FETCH_OFFICER_DATA_SUCCESS,
    payload: {
        // content // need to be adjusted
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
        // securityID: content.securityID,
        // companyName: content.companyName,
        // defaultQuestionInfo: content.defaultQuestionInfo,
    }
});


export function fetchOfficerData(Security_ID) {
    // Security/_ID = typeof Security_ID === 'number' ? Security_ID.toString() : Security_ID;
    return dispatch => {

        // dispatch(fetchQuestionsRequest());
        // return axios.post('/', { Security_ID })
        //     .then(res => {
        //         console.log('inside the get fetchCompanyQuestions().then');
        //         console.log(res.data.allResult);
        //         dispatch(fetchQuestionsSuccess(res.data.allResult));
        //     })
        //     .catch(error => {
        //         dispatch(fetchQuestionsFailure(error.message));
        //     })
    }
}


// export function fetchCompanyDefaultQuestion(Security_ID) {
//     Security_ID = typeof Security_ID === 'number' ? Security_ID.toString() : Security_ID;

//     return dispatch => {

//         dispatch(fetchDefaultQuestionRequest());
//         return axios.post('/proxy/get-corporate-default-question-data', {
//             "Security_ID": Security_ID
//         })
//             .then(res => {
//                 dispatch(fetchDefaultQuestionSuccess(res.data.allResult))
//                 console.log(res.data.allResult);
//             })
//             .catch(error => {
//                 dispatch(fetchDefaultQuestionFailure(error.message));
//                 console.log(error.message);
//             });
//     }
// }