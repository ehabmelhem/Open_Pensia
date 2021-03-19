import React, { useState } from "react";
import "./Header.css";
import Arrow from "./Arrow";
import VoteStatus from "./VoteStatus";
import { Switch, Route, Link, NavLink } from "react-router-dom";

export default function Header(props) {
  // height width tolink text

  const [allData, setAllData] = useState(null);
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
  let company_name ="בנק הפועלים"
  let AVE =25

  return (
    <div className="container1">
      <div className="page_above">
        <Arrow arrowToLink="/CompaniesList" color="white" />
       {/* <h1>{allData.company_name}</h1>*/}
        <h1>{company_name}</h1>
      </div>
     {/* <h1>{allData.AVE}%</h1>*/}
     <h1>{AVE}%</h1>
      <h0>שיעור ההחזקה שלך</h0>
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
