import "./MainNavBar.css";
import { Link, Switch, useRouteMatch } from "react-router-dom";
// import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
// import DetailsOfVoting from "../Components/DetailsOfVoting";
// import CandidateMoreInfo from "../Components/CandidateMoreInfo";
// import CandidateInfo from "./CandidateInfo";
// import React, { useState } from "react";



function MainNavBar({ navTabs }) {

  // const [navTabs1, setnavTabs1] = useState(navTabs);
  const match = useRouteMatch();
  function setNavActive(e) {
    const closestLi = !!e.target && e.target.closest("li");
    console.log(closestLi);
    var tabs = document.querySelectorAll(".all-tabs ul li");
    !!tabs && tabs.forEach((element) => {
      !!element.classList && element.classList.remove("active-nav");
    });
    !!closestLi && !!closestLi.classList && closestLi.classList.add("active-nav");
  }

  return (
    <nav className="all-tabs">
      <ul>
        {navTabs.map(({ id, toLink, className, content }) => {
          return (
            <Link key={id} to={`${match.url}${toLink}`} onClick={setNavActive}>
              <li className={className}>{content}</li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}

export default MainNavBar;