import React from "react";
import MainNavBar from "../Components/MainNavBar";

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
      <MainNavBar navTabs={infoDirectorTabs} />

      {/* <DetailsOfVoting voting={votingPer} /> */}
    </div>
  );
}
