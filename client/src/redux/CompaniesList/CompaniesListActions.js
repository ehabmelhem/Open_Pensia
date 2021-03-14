import {
    //COMPANIES LIST
    FETCH_COMPANIES_REQUEST,
    FETCH_COMPANIES_SUCCESS,
    FETCH_COMPANIES_FAILURE,

} from '../actionTypes';

// COMPANIES LIST Actions

export const fetchCompaniesRequest = () => ({
    type: FETCH_COMPANIES_REQUEST
});

export const fetchCompaniesSuccess = (content) => ({
    type: FETCH_COMPANIES_SUCCESS,
    payload: {
        content
    }
});

export const fetchCompaniesFailure = (error) => ({
    type: FETCH_COMPANIES_FAILURE,
    payload: {
        error
    }
});


export const fetchCompanies = () => {
    return function(dispatch) {
        dispatch(fetchCompaniesRequest());
        axios.post('/proxy/get-all-Corporates',{
            fundname: 'מור',
            chanell: 'גמל/פנסיה'
          })
        .then(res => {
            console.log(res);
            const companiesList = res.data;
            dispatch(fetchCompaniesSuccess(companiesList));

        })
        .catch(error => {
            dispatch(fetchCompaniesFailure(error.message));
        }); 

    }

    // "fundname":"מור",
    // "chanell":"גמל/פנסיה"

//     "Security_ID": 1094986,
// "company_name": "אופל בלאנס",
// "Sector Nisha": "אשראי חוץ בנקאי",
// "fund_name": "אלטשולר",
// "Chanel": "גמל/פנסיה",
// "A AVE Vote": 0.085


}