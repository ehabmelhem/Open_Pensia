import React, { useEffect } from 'react';
import { fetchCompanies, fetchCompanyQuestions } from '../../redux';
import { useDispatch, useSelector } from 'react-redux';
import CardListItem from '../Components/CardListItem';

function CompaniesList(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCompanies())
    }, []);
    let companies = useSelector(state => state.CompaniesListReducer.companies)
    function handleClick(securityID, companyName) {
        dispatch(fetchCompanyQuestions(securityID, companyName));
    }
    return (
        <div>
            {
                !!companies && companies.map(company => {
                    return (
                        <CardListItem
                            key={company.Security_ID}
                            logo='https://www.logolynx.com/images/logolynx/56/56f9957253c5718361c93a52c1ab950d.png'
                            name={company.company_name}
                            par={company['Sector Nisha']}
                            onClick={() => handleClick(company.Security_ID, company.company_name)}
                            link='CompanyInfo'
                        />
                    )
                })
            }
        </div>
    )
}

export default CompaniesList;