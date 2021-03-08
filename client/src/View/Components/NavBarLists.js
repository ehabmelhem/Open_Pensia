import React from "react";
import Arrow from "./Arrow";
import './NavBarLists.css'
export default function NavBarLists(props) {
  return (
   <div id="navBarTable">
        <table id="tableOfNav">
      <tr>
        <th id="thSpace"></th>
        <th id="thText">
          <p>{props.title}</p>
        </th>
        <th id="thArrow">
          <Arrow arrowToLink=" " color="#B7BCCC" />
        </th>
      </tr>
    </table>
   </div>
  );
}
