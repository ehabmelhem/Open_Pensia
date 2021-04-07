import React, { useState, useEffect } from "react";
import "./Header.css";
import Arrow from "./Arrow";
import VoteStatus from "./VoteStatus";
import { Switch, Route, Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header({ companyName }) {
  // height width tolink text
  const [numberOfQuestions, setNumberOfQuestions] = useState({
    userOpen: 0,
    userPending: 0,
    userResults: 0,
    AVE: 0,
  });
  const { securityID } = useSelector((state) => state.CompanyReducer);

  console.log(securityID, "...............");

  useEffect(async () => {
    console.log(securityID, "useState");
    if (securityID) {
      console.log(
        `Security_ID: ${securityID}, userId: '604ecb5c3a4add242471d352'`
      );
      await fetch("/proxy/get-expanded-header", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Security_ID: `${securityID}`,
          userId: `604f03f62e7ffa6328494fd5`,
        }),
      })
        .then((r) => r.json())
        .then(({ doc }) => {
          const { userOpen, userPending, userResults, AVE } = doc;
          console.log(doc);
          setNumberOfQuestions({ userOpen, userPending, userResults, AVE });
        });
    }
  }, [securityID]);

  /*let myarr = [
    { number:allData.userOpen, descreption: "פתוחות" },
    { number:allData.userPending, descreption: "ממתינות" },
    { number:allData.Results, descreption: "הצבעות שלי" },
  ];
*/
  let myarr = [
    { number: 3, descreption: "פתוחות" },
    { number: 2, descreption: "ממתינות" },
    { number: 5, descreption: "הצבעות שלי" },
  ];

  let AVE = 25;

  return (
    <div className="container1">
      <div className="page_above">
        <Arrow arrowToLink="/CompaniesList" color="white" />

        <h1>{companyName}</h1>
      </div>
      {/* <h1>{allData.AVE}%</h1>*/}
      <h1>{numberOfQuestions.AVE}%</h1>
      <p>שיעור ההחזקה שלך</p>
      <div className="vote-status-dashboard2">
        <VoteStatus number={numberOfQuestions.userOpen} description="פתוחות" />
        <VoteStatus
          number={numberOfQuestions.userPending}
          description="ממתינות"
        />
        <VoteStatus
          number={numberOfQuestions.userResults}
          description="הצבעות שלי"
        />
      </div>
    </div>
  );
}
