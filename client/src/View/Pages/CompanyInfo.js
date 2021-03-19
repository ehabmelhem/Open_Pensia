import React from 'react';
import {useSelector} from 'react-redux';

import Body from '../Components/body/Body'
import Header from '../Components/Header'

export default function CompanyInfo() {


    const {companyName, securityID} = useSelector(state=>state.CompanyReducer)

   

    return (
        <div>
             <Header companyName={companyName} perception='18.3'/>
            <Body security_ID={securityID}/>
        </div>
    )
}
