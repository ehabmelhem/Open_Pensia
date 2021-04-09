import Arrow from "../Components/Arrow";
import React, { useEffect } from "react";
import { fetchCompanies } from "../../redux";
import { useDispatch, useSelector } from "react-redux";
import CardListItem from "../Components/CardListItem";
import "./CompaniesListSelect.css";
import { Link } from "react-router-dom";

export default function CompaniesListSelect() {
  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(fetchCompanies())
  //   }, []);
  let companies = useSelector(
    (state) =>
      !!state.CompaniesListReducer && state.CompaniesListReducer.companies
  );
  // function handleClick(securityID) {
  //   console.log(securityID);
  //   dispatch(fetchCompanyDefaultQuestion(securityID,'',''));

  // }

  let isLoggedIn = useSelector(
    (state) => !!state.UserReducer && state.UserReducer
  );
  console.log(isLoggedIn);

  return (
    <div className="App1">
      <header className="App-header1">
        <div>
          <Link className="login-from-companies-list" to="/Login" target="_blank"> כניסה </Link>
        </div>
        <div className="question">?על איזו חברה תרצה/י להשפיע</div>
        <div>
          <Arrow arrowToLink="/QuestionsBeforeRegister" color="#B7BCCC" />
        </div>
      </header>
      {!!companies &&
        companies.map((company) => {
          return (
            <CardListItem
              status="company"
              securityID={company.Security_ID}
              companyName={company.company_name}
              key={company.Security_ID}
              logo="https://www.logolynx.com/images/logolynx/56/56f9957253c5718361c93a52c1ab950d.png"
              sectorNisha={company["Sector Nisha"]}
              toLink={`VoteDirectors/${company.Security_ID}`}
            />
          );
        })}
    </div>
  );
}
