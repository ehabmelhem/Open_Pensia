import { combineReducers } from "redux";
import CompaniesListReducer from "./CompaniesList/CompaniesListReducer";
import CompanyReducer from "./Company/CompanyReducer";
import VotesReducer from "./Votes/VotesReducer";
import OfficerReducer from './Officer/OfficerReducer';

export default combineReducers({
  CompaniesListReducer,
  CompanyReducer,
  VotesReducer,
    OfficerReducer
});
