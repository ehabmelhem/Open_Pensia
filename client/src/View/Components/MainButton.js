import React from 'react'
import { Link } from "react-router-dom";

export default function MainButton(props) { // height width tolink text 
    console.log(props.tolink)
    return (
        <div style={{ textAlign: "center" }}>
            <Link to={props.tolink}>
                <button style={{ width: `${props.width}`, height: `${props.height}` }}
                    className={props.myClass ? props.myClass : 'main-btn'}>{props.text}</button>
            </Link>

        </div>
    )
}