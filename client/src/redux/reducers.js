import { combineReducers } from "redux";
import CompaniesListReducer from './CompaniesList/CompaniesListReducer';
import CompanyReducer from './Company/CompanyReducer';

export default combineReducers({ CompaniesListReducer, CompanyReducer });
