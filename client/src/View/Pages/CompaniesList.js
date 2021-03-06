import React, { useEffect, useState } from "react";
import { fetchCompanies, fetchCompanyQuestions } from "../../redux";
import { useDispatch, useSelector } from "react-redux";
import CardListItem from "../Components/CardListItem";
import NavBarLists from "../Components/NavBarLists";

function CompaniesList(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("/proxy/get-fund-info")
      .then((r) => r.json())
      .then((data) => {
        dispatch(
          fetchCompanies(data.firstPage.fundName, data.firstPage.chanel)
        );
      });
  }, []);

  let companies = useSelector((state) => state.CompaniesListReducer.companies);
  console.log(useSelector((state) => state));
  // function handleClick(securityID, companyName) {
  //     console.log('....', securityID, companyName)
  //     dispatch(fetchCompanyQuestions(securityID, companyName));
  // }
  return (
    <div>
       <NavBarLists  to="/AfterRegistrationVoting"  title={"חברות אחזקה"}/>
      {!!companies &&
        companies.map((company) => {
          console.log(company["Sector Nisha"]);
          return (
            <div>
            <CardListItem
              securityID={company.Security_ID}
              companyName={company.company_name}
              key={company.Security_ID}
              logo="https://www.logolynx.com/images/logolynx/56/56f9957253c5718361c93a52c1ab950d.png"
              // sectorNisha={company['Sector Nisha']!=undefined?company['Sector Nisha']:null}
              sectorNisha={company["Sector Nisha"]}
              status="company"
              // onClick={() => handleClick(company.Security_ID, company.company_name)}
              toLink="CompanyInfo"
            />
            </div>
          );
        })}
    </div>
  );
}

export default CompaniesList;
