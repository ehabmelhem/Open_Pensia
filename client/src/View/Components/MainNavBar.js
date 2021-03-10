import "./MainNavBar.css";
import { Link, Switch } from "react-router-dom";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import DetailsOfVoting from "../Components/DetailsOfVoting";
import CandidateMoreInfo from "../Components/CandidateMoreInfo";
import CandidateInfo from "./CandidateInfo";
import React, { useState } from "react";

let votingPer = [{ disApprovePer: "20%", ApprovePer: "80%" }];

function MainNavBar({ navTabs }) {
  const [currentPage, setcurrentPage] = useState(0);

  function setNavActive(page) {
    if (page === 0) {
      navTabs.find((x) => x.id === 0).className = "active-nav";
      navTabs.find((x) => x.id === 1).className = "non-active-nav";
      navTabs.find((x) => x.id === 2).className = "non-active-nav";
    }

    if (page === 1) {
      navTabs.find((x) => x.id === 1).className = "active-nav";
      navTabs.find((x) => x.id === 0).className = "non-active-nav";
      navTabs.find((x) => x.id === 2).className = "non-active-nav";
    }

    if (page === 2) {
      navTabs.find((x) => x.id === 2).className = "active-nav";
      navTabs.find((x) => x.id === 1).className = "non-active-nav";
      navTabs.find((x) => x.id === 0).className = "non-active-nav";
    }
  }

  return (
    <Router>
      <div>
        <nav className="all-tabs">
          <ul>
            {navTabs.map(({ id, className, href, content }, index) => {
              return (
                <li key={index} className={className}>
                  <Link to={`/${href}`} onClick={setNavActive(id)}>
                    {content}
                  </Link>

                  {/* <a href={href}> </a> {content} */}
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
