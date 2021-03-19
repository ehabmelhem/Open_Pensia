import React, { useState } from "react";
import "./Header.css";
import Arrow from "./Arrow";
import VoteStatus from "./VoteStatus";
import { Switch, Route, Link, NavLink } from "react-router-dom";
import {useSelector} from 'react-redux';

export default function Header({companyName, securityID}) {
  // height width tolink text


/*
  useState(() => {
    fetch("/proxy/get-expanded-header",{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({"Security_ID": `${props.security_ID}`, "userId": `${props.userId}`}).then((r) => r.json()).then((data) => {setAllData(data)}),
    });
  }, []);*/

  /*let myarr = [
    { number:allData.userOpen, descreption: "פתוחות" },
    { number:allData.userPending, descreption: "ממתינות" },
    { number:allData.Results, descreption: "הצבעות שלי" },
  ];
*/
  let myarr = [
    { number:3, descreption: "פתוחות" },
    { number:2, descreption: "ממתינות" },
    { number:5, descreption: "הצבעות שלי" },
  ];
  
  let AVE =25;

  console.log(useSelector(state=>state.CompanyReducer))

  return (
    <div className="container1">
      <div className="page_above">
        <Arrow arrowToLink="/CompaniesList" color="white" />
     
        <h1>{companyName}</h1>
      </div>
     {/* <h1>{allData.AVE}%</h1>*/}
     <h1>{AVE}%</h1>
      <p>שיעור ההחזקה שלך</p>
      <div className="vote-status-dashboard2">
        {myarr.map((vote) => {
          return (
            <VoteStatus number={vote.number} description={vote.descreption} />
          );
        })}
      </div>
    </div>
  );
}
