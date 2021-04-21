
import React from 'react';
import MainButton from './MainButton';
import './MainCard.css'



export default function MainCard(props) {

    return (

        <div id="mainInMainCard">

<div id="divOnCircle"><div className="icon1" /></div>
            <h2 className='title'>{props.title}</h2>
            <p className='description'>{props.desc}</p>
            <MainButton  text={props.text} tolink={props.tolink} />
            
        </div>
    )
}
