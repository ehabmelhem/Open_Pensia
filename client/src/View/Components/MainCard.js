
import React from 'react';
import MainButton from './MainButton';
import './MainCard.css'



export default function MainCard(props) {

    return (

        <div className='main'>

            <img className='round-image' src='https://convertingcolors.com/plain-EAEAEA.svg' />
            <h2 className='title'>{props.title}</h2>
            <p className='description'>{props.desc}</p>
            <MainButton  text={props.text} tolink={props.tolink} />
            
        </div>
    )
}
