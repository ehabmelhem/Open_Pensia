import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaCartPlus } from "react-icons/fa";
import "./Slidebar.css";

function Sidebar(props){
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      {/* <IconContext.Provider value={{ color: "#fff" }}> */}
        <nav className={props.ToF ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="nav-text">
              <img onClick={() => props.exit()} id="exitMenu" src="https://cdn4.iconfinder.com/data/icons/basic-user-interface-elements/700/exit-delete-remove-close-x-256.png"/>
            </li>
            <li className="nav-text">
              <Link to="/CompaniesList" className="menu-bars">
                <span>חברות האחזקה שלי</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/VoteBending" className="menu-bars">
                <span>הצבעות ממתינות לתשובה</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/VotesHistory" className="menu-bars">
                <span>היסטורית הצבעות</span>
              </Link>
            </li>
            {/* 4 */}
            <li className="nav-text">
              <Link to="/OpenVotes" className="menu-bars">
                <span>הצבעות פתוחות</span>
              </Link>
            </li>
            {/* 5 */}
            <li className="nav-text">
              <Link to="/null" className="menu-bars">
                <span>שתף לחברים</span>
              </Link>
            </li>
            {/* 6 */}
            <li className="nav-text">
              <Link to="/null" className="menu-bars">
                <span>תרומה לעמותה</span>
              </Link>
            </li>
            {/* 7 */}
            <li className="nav-text">
              <Link to="/null" className="menu-bars">
                <span>התנתק/י</span>
              </Link>
            </li>
          </ul>
        </nav>
      {/* </IconContext.Provider> */}
    </>
  );
};

export default Sidebar;

{/* <img onClick={exit} id="exitMenu" src="https://cdn4.iconfinder.com/data/icons/basic-user-interface-elements/700/exit-delete-remove-close-x-256.png"/>
<ul id="allListMenu">
    <li className="eachLineInMenu"><Link>חברות האחזקה שלי</Link></li>
    <li className="eachLineInMenu"><Link>הצבעות ממתינות לתשובה</Link></li>
    <li className="eachLineInMenu"><Link>היסטורית הצבעות</Link></li>
    <li className="eachLineInMenu"><Link>הצבעות פתוחות</Link></li>
    <li className="eachLineInMenu"><Link>שתף לחברים</Link></li>
    <li className="eachLineInMenu"><Link>תרומה לעמותה</Link></li>
    <li className="eachLineInMenuLast"><Link>התנתק/י</Link></li>
</ul> */}
