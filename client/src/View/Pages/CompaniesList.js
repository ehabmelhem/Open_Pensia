import React, { useEffect } from "react";
import { fetchCompanies, fetchCompanyQuestions } from "../../redux";
import { useDispatch, useSelector } from "react-redux";
import CardListItem from "../Components/CardListItem";

function CompaniesList(props) {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchCompanies());

  }, []);
  let companies = useSelector((state) => state.CompaniesListReducer.companies);
  console.log(useSelector((state) => state));
  // function handleClick(securityID, companyName) {
  //     console.log('....', securityID, companyName)
  //     dispatch(fetchCompanyQuestions(securityID, companyName));
  // }
  return (
    <div>
      {!!companies &&
        companies.map((company) => {
          console.log(company["Sector Nisha"]);
          return (
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
          );
        })}
    </div>
  );
}

export default CompaniesList;
