import React from "react";
import MainNavBar from "../Components/MainNavBar";
import Header from "../Components/VotingHeader";
import { useParams } from 'react-router'
import { fetchOfficerData } from '../../redux'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { addMessage } from '../../redux/action';

export default function InfoDirector() {

  const { id } = useParams()
  console.log(id)
  const dispatch = useDispatch();
  dispatch(fetchOfficerData(id));

  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      <Header
        directorName="עיסאווי פריג'"
        company="בנק הפועלים"
        link={"/VoteDirectors"}
      />
      <MainNavBar navTabs={infoDirectorTabs} />
    </div>
  );
}

let infoDirectorTabs = [
  {
    id: 2,
    className: "non-active-nav",
    href: "VotingDetails",
    content: "נתוני הצבעה",
  },
  {
    id: 1,
    className: "non-active-nav",
    href: "moreInfo",
    content: "עוד מידע",
  },
  {
    id: 0,
    className: "non-active-nav",
    href: "about",
    content: "סיכום פרטים",
  },
];