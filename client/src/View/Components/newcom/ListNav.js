import React from 'react'
import {Animated} from "react-animated-css";
import { Switch, Route, Link, NavLink } from "react-router-dom";
import './ListNav.css'

export default function ListNav(props) {
    function exit(){
        props.exit();
    }
    return (
<div id="firstDivMenu" style={{display:props.ToF?'block':'none'}}>
        <div id="secondDivMenu" >
            <img onClick={exit} id="exitMenu" src="https://cdn4.iconfinder.com/data/icons/basic-user-interface-elements/700/exit-delete-remove-close-x-256.png"/>
            <ul id="allListMenu">
                <li className="eachLineInMenu"><Link>חברות האחזקה שלי</Link></li>
                <li className="eachLineInMenu"><Link>הצבעות ממתינות לתשובה</Link></li>
                <li className="eachLineInMenu"><Link>היסטורית הצבעות</Link></li>
                <li className="eachLineInMenu"><Link>הצבעות פתוחות</Link></li>
                <li className="eachLineInMenu"><Link>שתף לחברים</Link></li>
                <li className="eachLineInMenu"><Link>תרומה לעמותה</Link></li>
                <li className="eachLineInMenuLast"><Link>התנתק/י</Link></li>
            </ul>
        </div>
        </div>

       
    )
}
