import axios from 'axios';
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


// OFFICER Action Creators

// OFFICER_DATA

export const fetchOfficerDataRequest = () => ({
    type: FETCH_OFFICER_DATA_REQUEST
});

export const fetchOfficerDataSuccess = (content) => ({
    type: FETCH_OFFICER_DATA_SUCCESS,
    payload: {
        officerName: content.officerName,
        officerId: content.officerId,
        officerBirthday: content.officerBirthday,
        officerPresonalIntrest: content.officerPresonalIntrest,
        officerEducation: content.officerEducation,
        officerVC: content.officerVC,
        officerOtherJobs: content.officerOtherJobs,
        officerRelative: content.officerRelative,
        officerFinancialExpert: content.officerFinancialExpert,
    }
});

export const fetchOfficerDataFailure = (error) => ({
    type: FETCH_OFFICER_DATA_FAILURE,
    payload: {
        error
    }
});

export function fetchOfficerData(officerId) {
    officerId = typeof officerId === 'number' ? officerId.toString() : officerId;

    return dispatch => {
        dispatch(fetchOfficerDataRequest());
        axios.post('/officer/get-officer-data', {
            officerId
        })
            .then(res => {
                console.log(res.data.doc[Object.keys(res.data.doc)[0]]); 
                let content = res.data.doc[Object.keys(res.data.doc)[0]]; // to get the first element on the object
                dispatch(fetchOfficerDataSuccess({
                    officerName: content.Officers_Name,
                    officerId: content.Officers_ID,
                    officerBirthday: content.Oficer_Birthday,
                    officerPresonalIntrest: content.Oficer_Personal_interest,
                    officerEducation: content.Oficer_education,
                    officerVC: content.Oficer_VC,
                    officerOtherJobs: content.Oficer_Other_jobs,
                    officerRelative: content.Relative,
                    officerFinancialExpert: content["Financial expert"],
                }));

            })
            .catch(error => {
                dispatch(fetchOfficerDataFailure(error.message));
                console.log(error.message);
                console.log('error.message');
            })
    }
}

//_OFFICER_ARTICLES

export function addOfficerArticle(content) {

    return (dispatch) => {
        axios.post('/officer/add-article', {
            officerId: content.officerId,
            articleId: content.articleId,
            articleTitle: content.articleTitle,
            articleText: content.articleText,
            articleUrl: content.articleUrl
        })
            .then(res => {
                console.log(res.data);
                dispatch({
                    type: ADD_OFFICER_ARTICLE,
                    payload: {
                        officerId: res.data.officerId,
                        articleTitle: res.data.articleTitle,
                        articleText: res.data.articleText,
                        articleStatus: res.data.articleStatus,
                        articleUrl: res.data.articleUrl,
                    }
                })
            })
            .catch(error => {
                console.log(error.message)
            })
    }
};



export const fetchOfficerArticlesRequest = () => ({
    type: FETCH_OFFICER_ARTICLES_REQUEST,
});
export const fetchOfficerArticlesSuccess = (articles) => ({
    type: FETCH_OFFICER_ARTICLES_SUCCESS,
    payload: {
        articles
    }
});
export const fetchOfficerArticlesFailure = (error) => ({
    type: FETCH_OFFICER_ARTICLES_FAILURE,
    payload: {
        error
    }
});

export function fetchOfficerArticles(officerId) {

    officerId = typeof officerId === 'number' ? officerId.toString() : officerId;

    return dispatch => {
        dispatch(fetchOfficerArticlesRequest());
        axios.get('/officer/get-articles', {
            officerId
        })
            .then(res => {
                console.log(res.data);
                dispatch(fetchOfficerArticlesSuccess({
                    articles: res.data
                }));
            })
            .catch(error => {
                dispatch(fetchOfficerArticlesFailure(error.message));
                console.log(error.message);
                console.log('error.message');
            })
    }
}



