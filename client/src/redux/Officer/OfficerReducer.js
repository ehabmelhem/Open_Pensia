import {
    //OFFICER
    FETCH_OFFICER_DATA_REQUEST,
    FETCH_OFFICER_DATA_SUCCESS,
    FETCH_OFFICER_DATA_FAILURE,
    ADD_OFFICER_ARTICLE,
    FETCH_OFFICER_ARTICLES_REQUEST,
    FETCH_OFFICER_ARTICLES_SUCCESS,
    FETCH_OFFICER_ARTICLES_FAILURE

} from '../actionTypes';


const initialState = {
    name: '',
    id: '',
    birthday: '',
    personalInterest: '',
    education: '',
    VC: '',
    otherJobs: '',
    relative: '',
    financialExpert: '',
    articles: [],
    loading: false,
    error: ''
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
                ...state,
                name: action.payload.officerName,
                id: action.payload.officerId,
                birthday: action.payload.officerBirthday,
                personalInterest: action.payload.officerPresonalIntrest,
                education: action.payload.officerEducation,
                VC: action.payload.officerVC,
                otherJobs: action.payload.officerOtherJobs,
                relative: action.payload.officerRelative,
                financialExpert: action.payload.officerFinancialExpert,
                loading: false,
                error: ''
            };
        case FETCH_OFFICER_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        case ADD_OFFICER_ARTICLE:
            return {
                ...state,
                articles: [...state.articles, {
                    articleTitle: action.payload.articleTitle,
                    articleText: action.payload.articleText,
                    articleStatus: action.payload.articleStatus,
                    articleUrl: action.payload.articleUrl,
                }]
            };
        case FETCH_OFFICER_ARTICLES_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_OFFICER_ARTICLES_SUCCESS:
            return {
                ...state,
                articles: action.payload.articles,
                loading: false,
                error: ''
            };
        case FETCH_OFFICER_ARTICLES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}

export default OfficerReducer;