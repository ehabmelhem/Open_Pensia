import Arrow from "../Components/Arrow";
import React, { useEffect } from 'react';
import { fetchCompanies } from '../../redux';
import { useDispatch, useSelector } from 'react-redux';
import CardListItem from '../Components/CardListItem';
import "./CompaniesListSelect.css";

export default function CompaniesListSelect() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCompanies())
    }, []);
    let companies = useSelector(state => state.CompaniesListReducer.companies)
    function handleClick() {

    }
    return (
        <div className="App1">
            <header className="App-header1">
                <div>
                    <a className="login" href="#" target="_blank">
                        {" "}
            כניסה{" "}
                    </a>
                </div>
                <div className="question">?על איזו חברה תרצה/י להשפיע</div>
                <div>
                    <Arrow arrowToLink=" " color="#B7BCCC" />
                </div>
            </header>
            {!!companies && companies.map((company) => {
                return (
                    <CardListItem
                        key={company.Security_ID}
                        logo='https://www.logolynx.com/images/logolynx/56/56f9957253c5718361c93a52c1ab950d.png'
                        name={company.company_name}
                        par={company['Sector Nisha']}
                        onClick={handleClick}
                        link={"VoteDirectors"} //need to add proper link Security_ID
                    />
                );
            })}
        </div>
    );
}
