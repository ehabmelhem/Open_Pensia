import { combineReducers } from "redux";
import CompaniesListReducer from './CompaniesList/CompaniesListReducer';

export default combineReducers({ CompaniesListReducer });


export {fetchCompanies} from './CompaniesList/CompaniesListActions';