import React, { useEffect } from 'react';
import { fetchCompanies } from '../../redux';
// import { CompanyBar } from '../Components/CardListItem';

function CompaniesList(props) {
    useEffect(()=> {
        fetchCompanies()
    },[]);
    

    return (
        <div>
            {
                // props.companies.map(company => {
                //     return (
                //         <CompanyBar />
                //     )
                // })
            }
        </div>
    )
}

export default CompaniesList;