import "./MainNavBar.css";
import { Link, Switch } from "react-router-dom";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import DetailsOfVoting from "../Components/DetailsOfVoting";
import CandidateMoreInfo from "../Components/CandidateMoreInfo";
import CandidateInfo from "./CandidateInfo";
import React, { useState } from "react";

let votingPer = [{ disApprovePer: "20%", ApprovePer: "80%" }];

function MainNavBar({ navTabs }) {

  const [navTabs1, setnavTabs1] = useState(navTabs);

  function setNavActive(page) {
    const closestLi = !!page.target && page.target.closest("li");
    console.log(closestLi);
    var tabs = document.querySelectorAll(".all-tabs ul li");
    tabs.forEach((element) => {
      element.classList.remove("active-nav");
    });
    closestLi.classList.add("active-nav");
  }

  return (
    <Router>
      <div>
        <nav className="all-tabs">
          <ul>
            {navTabs1.map(({ id, className, href, content }, index) => {
              return (
                <li key={index} className={className}>
                  <Link
                    to={`/${href}`}
                    onClick={(id) => {
                      setNavActive(id);
                    }}
                  >
                    {content}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Switch>
          <Route path="/moreInfo">
            <CandidateMoreInfo />
          </Route>
          <Route path="/VotingDetails">
            <DetailsOfVoting voting={votingPer} />
          </Route>

          <Route path="/">
            <CandidateInfo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default MainNavBar;
