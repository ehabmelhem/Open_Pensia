import {
    //COMPANY
    SET_COMPANY_DETAILS,
    FETCH_QUESTIONS_REQUEST,
    FETCH_QUESTIONS_SUCCESS,
    FETCH_QUESTIONS_FAILURE,
    FETCH_DEFAULT_QUESTION_REQUEST,
    FETCH_DEFAULT_QUESTION_SUCCESS,
    FETCH_DEFAULT_QUESTION_FAILURE

} from '../actionTypes';


const initialState = {
    companyName: '',
    securityID: '',
    questions: [],
    defaultQuestion: {
        code: '',
        topic: '',
        ave: '',
        officers: []
    },
    loading: false,
    error: ''
};

const CompanyReducer = (state = initialState, action) => {
   console.log(action.type)
    switch (action.type) {
        case SET_COMPANY_DETAILS:
            console.log(SET_COMPANY_DETAILS, action)
            return {...state, companyName: action.payload.companyName, securityID: action.payload.securityID}
        case FETCH_QUESTIONS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_QUESTIONS_SUCCESS:
            return {
                ...state,
                loading: false,
                questions: action.payload.questions,
                defaultQuestion: action.payload.questions[0],
                error: ''
            };
        case FETCH_QUESTIONS_FAILURE:
            return {
                ...state,
                questions: [],
                error: action.payload.error
            };
        case FETCH_DEFAULT_QUESTION_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_DEFAULT_QUESTION_SUCCESS:
            return {
                ...state,
                loading: false,
                error: '',
                defaultQuestion: action.payload.defaultQuestion
            };
        case FETCH_DEFAULT_QUESTION_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                defaultQuestion: {
                    code: '',
                    topic: '',
                    ave: '',
                    officers: []
                }
            };
        default:
            return state;
    }
}

export default CompanyReducer;