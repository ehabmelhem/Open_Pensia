import React, { useEffect, useState } from 'react'
import MainButton from '../Components/MainButton'
import CompanyNamePrev from '../Components/newcom/CompanyNamePrev'
import CompanyVotingStatus from '../Components/newcom/CompanyVotingStatus'
import GroupEffectCont from '../Components/newcom/GroupEffectCont'
import NavBarAfterLogIn from '../Components/newcom/NavBarAfterLogIn'

export default function AfterRegistrationVoting() {

    const [userId,setUserId] = useState();

    useEffect(()=>{
        fetch('getIdFromCookie').then(r=>r.json()).then(data=>{setUserId(data)})

fetch('/proxy/get-fund-info',{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify('604f03f62e7ffa6328494fd5')
  }).then(r=>r.json()).then(data=>{console.log(data)})
    },[])

    return (
        <div>
             <NavBarAfterLogIn/>
      <CompanyNamePrev/>
          <CompanyVotingStatus/>
          <GroupEffectCont/>
          <div id="btnbtn" style={{maxWidth:"600px",minWidth:"375px",textAlign:"center",margin:"43% auto auto",marginTop:"202px"}}>
          <MainButton width="90%" height="54px" text="אני רוצה להצביע" />
          </div>
        </div>
    )
}
