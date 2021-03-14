import React from "react";
import MainNavBar from "../Components/MainNavBar";
import { useSelector, useDispatch } from "react-redux";
import { addMessage } from '../../redux/action';

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
      href: "#",
      content: "סיכום פרטים",
    },
    {
      className: "active-nav",
      href: "#",
      content: "עוד מידע",
    },
    {
      className: "non-active-nav",
      href: "#",
      content: "נתוני הצבעה",
    },
  ];
  // redux Test
  const dispatch = useDispatch();
  const message = useSelector(state => state.MessageReducer.message);

  const MessageReducer = useSelector(state => state.MessageReducer);
  console.log(message);
  console.log(MessageReducer);
  setTimeout(() => dispatch(addMessage("Ehab_Test")), 2000);

  // console.log(message);
  // console.log(MessageReducer);

  return (
    <div>
      <MainNavBar navTabs={infoDirectorTabs} />
    </div>
  );
}
