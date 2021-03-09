import React from "react";
import MainNavBar from "../Components/MainNavBar";
import CandidateMoreInfo from '../Components/CandidateMoreInfo';
import Header from '../Components/VotingHeader';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";

export default function InfoDirector() {
  let infoDirectorTabs = [
    {
      className: "non-active-nav",
      href: "VotingDetails",
      content: "נתוני הצבעה",
    },
    {
      className: "active-nav",
      href: "moreInfo",
      content: "עוד מידע",
    },
    {
      className: "non-active-nav",
      href: "about",
      content: "סיכום פרטים",
    },
  ];

  return (
    <div>
      <Header directorName="עיסאווי פריג'" company="בנק הפועלים"/>
      <MainNavBar navTabs={infoDirectorTabs} />
      {/* <DetailsOfVoting voting={votingPer} /> */}
      <CandidateMoreInfo/>
    </div>
  );
}
