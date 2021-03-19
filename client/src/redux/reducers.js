import { combineReducers } from "redux";
import CompaniesListReducer from './CompaniesList/CompaniesListReducer';
import CompanyReducer from './Company/CompanyReducer';
import OfficerReducer from './Officer/OfficerReducer';

export default combineReducers({
    CompaniesListReducer,
    CompanyReducer,
    OfficerReducer
});
