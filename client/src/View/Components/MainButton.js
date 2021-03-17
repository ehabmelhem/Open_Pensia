import React from 'react'
import './MainButton.css'
import { Switch, Route, Link, NavLink } from "react-router-dom";

export default function MainButton(props) { // height width tolink text 
    return (
        <div>
            <Link to={props.tolink}>
            { <button className='main-button' style={{width:`${props.width}`,height:`${props.height}`}}>{props.text}</button> }
            {/*<button className={props.myClass}>{props.text}</button>*/}
            </Link>

        </div>
    )
}