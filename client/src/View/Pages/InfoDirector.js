import React from "react";
import MainNavBar from "../Components/MainNavBar";
import Header from "../Components/VotingHeader";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { addMessage } from '../../redux/action';

export default function InfoDirector() {
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
  // redux Test
  // const dispatch = useDispatch();
  // const message = useSelector(state => state.MessageReducer.message);

  // const MessageReducer = useSelector(state => state.MessageReducer);
  // console.log(message);
  // console.log(MessageReducer);
  // setTimeout(() => dispatch(addMessage("Ehab_Test")), 2000);

  // console.log(message);
  // console.log(MessageReducer);

  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      <Header
        directorName="עיסאווי פריג'"
        company="בנק הפועלים"
        link={"../VoteDirectors"}
      />
      <MainNavBar navTabs={infoDirectorTabs} />
    </div>
  );
}
