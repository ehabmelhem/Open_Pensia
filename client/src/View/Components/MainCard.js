
import React from 'react';
import MainButton from './MainButton';
import './MainCard.css'



export default function MainCard(props) {

    return (

        <div className='body'>

            <div id="divOnCircle"> <div className="icon1" ></div></div>
            <h2 className='title'>{props.title}</h2>
            <p className='description_firstPages'>{props.desc}</p>
            <div className='footer'>
                <MainButton myClass='button' text={props.text} tolink={props.tolink} />
            </div>
        </div>
    )
}
