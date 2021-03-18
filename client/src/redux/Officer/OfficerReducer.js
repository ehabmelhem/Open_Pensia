import {
    //OFFICER
    FETCH_OFFICER_DATA_REQUEST,
    FETCH_OFFICER_DATA_SUCCESS,
    FETCH_OFFICER_DATA_FAILURE,
    ADD_OFFICER_ARTICLE,

} from '../actionTypes';


const initialState = {
    // companyName: '',
    // securityID: '',
    // questions: [],
    // defaultQuestion: {
    //     code: '',
    //     topic: '',
    //     ave: '',
    //     officers: []
    // },
    // loading = false,
    // error: ''
};

const OfficerReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_OFFICER_DATA_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_OFFICER_DATA_SUCCESS:
            return {
                // loading: false,
                // securityID: action.payload.securityID,
                // companyName: action.payload.companyName,
                // questions: action.payload.questions,
                // defaultQuestion: action.payload.questions[0],
                // error: ''
            };
        case FETCH_OFFICER_DATA_FAILURE:
            return {
                ...state,
                loading: true
            };
        case ADD_OFFICER_ARTICLE:
            return {

            };

        default:
            return state;
    }
}

export default OfficerReducer;