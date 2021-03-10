
import React, { useState, useEffect } from 'react';

import './FirstPages.css'

export default function FirstPages() {
     let firstPages=[
         {title:'למה זה חשוב' , dec :'ורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט ' ,buttonTitle:'אהבתי '}
     ,{title:'למה זה טוב לך' , dec :'ורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ' ,buttonTitle:'מעולה '}
    ,{title:'איך זה משרת אותך' , dec :'ורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם' ,buttonTitle:'אני רוצה להתחיל '}
    ,{title:'זהינו שיש לך החזקה ב10 חברות בשוק' , dec :'והאם תרצה להשפיע' ,buttonTitle:'אני רוצה להתחיל '}]
  let [index,setindex]=useState(0);
  
  function next(){
     
    index++;
     if(index <= firstPages.length)
      setindex(index)
  }
    return (
        <div className='first'>
            <img class="icon" src='https://convertingcolors.com/plain-EAEAEA.svg'/>
             <a className='title1'>{firstPages[index].title}</a>
             <p class='description'>{firstPages[index].dec}</p>
      <button className='button' onClick={next}>{firstPages[index].buttonTitle}</button>
      
         <a className='signin'>יש לי כבר חשבון </a>
        </div>
        
    )
}
