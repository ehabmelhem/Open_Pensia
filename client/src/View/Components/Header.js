import React from 'react'
import './Header.css'
import Arrow from './Arrow'
import VoteStatus from './VoteStatus'
import { Switch, Route, Link, NavLink } from "react-router-dom";

export default function Header(props) { // height width tolink text 
    let myarr = [{ number: 3, descreption: 'פתוחות' }, { number: 1, descreption: 'ממתינות' }, { number: 10, descreption: 'הצבעות שלי' }]
    return (
        <div className="container1">
            <div className="page_above">
                <Arrow arrowToLink='/CompaniesList' color='white' />
                <h1>{props.company}</h1>
            </div>
            <h1>{props.perception}%</h1>
            <h4>שיעור ההחזקה שלך</h4>
            <div className='vote-status-dashboard2'>
                {myarr.map((vote, index) => {
                    return (<VoteStatus key={index} number={vote.number} description={vote.descreption} />);
                })}
            </div>
        </div >
    )
}