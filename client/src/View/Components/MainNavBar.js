import "./MainNavBar.css";
import { Link, Switch } from "react-router-dom";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import DetailsOfVoting from "../Components/DetailsOfVoting";
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
        {/* <DetailsOfVoting voting={votingPer} /> */}

        <Switch>
          <Route path="/about">
            <div>hi1</div>
          </Route>
          <Route path="/users">
            <div>hi2</div>
          </Route>
          <Route path="/">
            <div>hi3</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default MainNavBar;
