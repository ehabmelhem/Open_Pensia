
import React from 'react';
import MainButton from '../Components/MainButton';
import '../Pages/SignUpRequest.css'

export default function SignUpRequest() {

    return (

        <div className='main'>
            <img className='round-image' src='https://convertingcolors.com/plain-EAEAEA.svg' />

            <h2 className='title'>נתוני ההצבעה שלך שמורים במערכת</h2>
            <p className='description'>על מנת נוכל להעביר את הצבעתך לגוף הפנסיה שלך, אנו זקוקים לך כמשתמש רשום</p>
            <MainButton text="אני רוצה להרשם" tolink={"SignUpRequest"} />
        </div>
    )
}
