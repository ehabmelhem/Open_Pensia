import "./MainNavBar.css";
import { Link, Switch } from "react-router-dom";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import DetailsOfVoting from "../Components/DetailsOfVoting";
import CandidateMoreInfo from '../Components/CandidateMoreInfo';

let votingPer = [{ disApprovePer: "20%", ApprovePer: "80%" }];

function MainNavBar({ navTabs }) {
  return (
    <Router>
      <div>
        <nav className="all-tabs">
          <ul>
            {navTabs.map(({ className, href, content }, index) => {
              return (
                <li key={index} className={className}>
                  <Link to={`/${href}`}>{content}</Link>

                  {/* <a href={href}> </a> {content} */}
                </li>
              );
            })}
          </ul>
        </nav>

        <Switch>
          <Route path="/moreInfo">
          <CandidateMoreInfo/>
          </Route>
          <Route path="/VotingDetails">
            <DetailsOfVoting voting={votingPer} />
          </Route>
          <Route path="/">
            <div>hi2</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default MainNavBar;
