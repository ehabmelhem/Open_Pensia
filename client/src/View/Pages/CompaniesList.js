import React, { useEffect } from 'react';
import { fetchCompanies } from '../../redux/CompaniesList/CompaniesListActions';
import {useDispatch} from 'react-redux';
// import { CompanyBar } from '../Components/CardListItem';

function CompaniesList(props) {
    const dispatch = useDispatch();
    useEffect(()=> {
        console.log(fetchCompanies);
       dispatch(fetchCompanies())
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