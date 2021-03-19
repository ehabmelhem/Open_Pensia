import { combineReducers } from "redux";
import CompaniesListReducer from "./CompaniesList/CompaniesListReducer";
import CompanyReducer from "./Company/CompanyReducer";
import VotesReducer from "./Votes/VotesReducer";

export default combineReducers({
  CompaniesListReducer,
  CompanyReducer,
  VotesReducer,
});
