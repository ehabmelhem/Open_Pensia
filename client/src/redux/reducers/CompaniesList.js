import {
    //COMPANIES LIST
    FETCH_COMPANIES_REQUEST,
    FETCH_COMPANIES_SUCCESS,
    FETCH_COMPANIES_FAILURE,

} from './actionTypes';

const initialCompaniesListState = {
    companies: [],
    loading: false,
    error: ''
};

const CompaniesListReducer = (state = initialCompaniesListState, action) => {
    switch (action.type) {
        case FETCH_COMPANIES_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_COMPANIES_SUCCESS:
            return {
                loading: false,
                companies: action.payload,
                error: ''
            };
        case FETCH_COMPANIES_FAILURE:
            return {
                loading: false,
                companies: [],
                error: action.payload
            };
        default:
            return state;
    }
}

export default CompaniesListReducer;