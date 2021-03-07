import React from 'react'
import './VoteStatus.css'
// import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Switch, Route, Link, NavLink } from "react-router-dom";

export default function VoteStatus(props) { // height width tolink text 
    return (
        <div className=''>
            <div className='vote-status-number'>{props.number}</div>
            <div className='vote-status-descreption'>{props.description}</div>
        </div>
    )
}