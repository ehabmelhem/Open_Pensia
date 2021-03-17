import {
    //COMPANY
    FETCH_QUESTIONS_REQUEST,
    FETCH_QUESTIONS_SUCCESS,
    FETCH_QUESTIONS_FAILURE,
    FETCH_DEFAULT_QUESTION_REQUEST,
    FETCH_DEFAULT_QUESTION_SUCCESS,
    FETCH_DEFAULT_QUESTION_FAILURE

} from '../actionTypes';


const initialState = {
    securityID: '',
    questions: [],
    defaultQuestion: {
        code: '',
        topic: '',
        ave: '',
        officers: []
    },
    loading = false,
    error: ''
};

const CompanyReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_QUESTIONS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_QUESTIONS_SUCCESS:
            return {
                loading: false,
                securityID:action.payload.securityID,
                questions: action.payload.questions,
                defaultQuestion: action.payload.questions[0],
                error: ''
            };
        case FETCH_QUESTIONS_FAILURE:
            return {
                questions:[],
                securityID:'',
                defaultQuestion:{
                    code: '',
                    topic: '',
                    ave: '',
                    officers: []
                },
                loading: false,
                error: action.payload.error
            };
        case FETCH_DEFAULT_QUESTION_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_DEFAULT_QUESTION_SUCCESS:
            return {
                loading: false,
                error: '',
                securityID: action.payload.securityID,
                questions: [],
                defaultQuestion: action.payload.defaultQuestionInfo,
            };
        case FETCH_DEFAULT_QUESTION_FAILURE:
            return {
                loading: false,
                error: action.payload.error,
                securityID: '',
                questions: [],
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