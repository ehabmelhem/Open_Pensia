import React from "react";
import Arrow from "./Arrow";
import './NavBarLists.css'
import {Link} from 'react-router-dom';
export default function NavBarLists(props) {
  return (
   <div id="navBarTable">
        <table id="tableOfNav">
      <tr>
        <th id="thSpace"></th>
        <th id="thText">
          <p>{props.title}</p>
        </th>
       <Link to="/AfterRegistrationVoting"> <th id="thArrow">
          <Arrow arrowToLink=" " color="#B7BCCC" />
        </th>
        </Link>
      </tr>
    </table>
   </div>
  );
}
