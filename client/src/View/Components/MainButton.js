import React from 'react'
import { Link } from "react-router-dom";

export default function MainButton(props) { // height width tolink text 
    return (
        <div style={{ textAlign: "center" }}>
            <Link to={props.tolink}>
                <button style={{width:`${props.width}`,height:`${props.height}`}} className='main-btn'>{props.text}</button>
            </Link>

        </div>
    )
}