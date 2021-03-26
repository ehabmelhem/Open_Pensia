
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router";
import { fetchCompanies } from '../../redux';
import { useDispatch, useSelector } from 'react-redux';
import QuestionsBeforeRegister from './QuestionsBeforeRegister';
import './FirstPages.css';

export default function FirstPages() {
    const history = useHistory();
    let companies = useSelector(state => !!state.CompaniesListReducer && state.CompaniesListReducer.companies);
  console.log(companies)
  let title5='זהינו שיש לך החזקה ב'+companies.length+' חברות בשוק'
  
     let firstPages=[
         {title:'למה זה חשוב' , dec :'ורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט ' ,buttonTitle:'אהבתי '}
     ,{title:'למה זה טוב לך' , dec :'ורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ' ,buttonTitle:'מעולה '}
    ,{title:'איך זה משרת אותך' , dec :'ורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם' ,buttonTitle:'אני רוצה להתחיל '}
    ,{title:''},
    {title:title5 , dec :'והאם תרצה להשפיע' ,buttonTitle:'אני רוצה להשפיע '}]
  let [index,setindex]=useState(0);
  
  function next(){
     
    index++;
     if(index <= 4)
      setindex(index)
      else{
        history.push('CompaniesListSelect')
      }
  }
  function toLoginPage(){
    history.push('Login')
  }
    return (
      <div >
        
          {index === 3 ?
          < div className='body'>
          <QuestionsBeforeRegister/>
          <div></div>
          <button onClick={next}>אהבתי</button>
          <div></div>
          <a className='signin' onClick={toLoginPage}>יש לי כבר חשבון </a></ div>:
          
          <div className='body'>
            <div className='icon'></div>
             <a className='title'>{firstPages[index].title}</a>
             <p class='description'>{firstPages[index].dec}</p>
             <button onClick={next}>{firstPages[index].buttonTitle}</button>
             <div></div>
             <a className='signin' onClick={toLoginPage}>יש לי כבר חשבון </a></div>}
             </div> 
        
        
    )

}
