import React from "react";
import MainNavBar from "../Components/MainNavBar";
import Header from "../Components/VotingHeader";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";

export default function InfoDirector() {
  let infoDirectorTabs = [
    {
      id: 2,
      className: "active-nav",
      href: "VotingDetails",
      content: "נתוני הצבעה",
    },
    {
      id: 1,
      className: "active-nav",
      href: "moreInfo",
      content: "עוד מידע",
    },
    {
      id: 0,
      className: "active-nav",
      href: "about",
      content: "סיכום פרטים",
    },
  ];

  return (
    <div style={{maxWidth:"600px",margin:"auto"}}>
      <Header directorName="עיסאווי פריג'" company="בנק הפועלים" />
      <MainNavBar navTabs={infoDirectorTabs} />
    </div>
  );
}
