import React, { useEffect, useState } from 'react'
import MainButton from '../Components/MainButton'
import CompanyNamePrev from '../Components/newcom/CompanyNamePrev'
import CompanyVotingStatus from '../Components/newcom/CompanyVotingStatus'
import GroupEffectCont from '../Components/newcom/GroupEffectCont'
import NavBarAfterLogIn from '../Components/newcom/NavBarAfterLogIn'

export default function AfterRegistrationVoting() {

    const [dataFirstPage,setDataFirstPage] = useState({});

    useEffect(()=>{
fetch('/proxy/get-fund-info').then(r=>r.json()).then(data=>{
    setDataFirstPage(data.firstPage);
})
    },[])

    return (
        <div>
             <NavBarAfterLogIn />
      <CompanyNamePrev fundName={dataFirstPage.fundName} chanel={dataFirstPage.chanel}/>
          <CompanyVotingStatus waitingVoting={dataFirstPage.waitingVoting} openVoting={dataFirstPage.openVoting}/>
          <GroupEffectCont groupPower={dataFirstPage.groupPower}/>
          <div id="btnbtn" style={{maxWidth:"600px",minWidth:"375px",textAlign:"center",margin:"43% auto auto",marginTop:"202px"}}>
          <MainButton width="90%" height="54px" text="אני רוצה להצביע" />
          </div>
        </div>
    )
}
