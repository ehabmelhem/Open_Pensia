import React from "react";
import "./CompanyVotingStatus.css";
import VotingBar from "./VotingBar";

export default function CompanyVotingStatus(props) {
  return (
   <div dir="rtl" id="bigDiv">
      <table id="tableOf2Bars">
      <tr>
        <th>
        <VotingBar src="https://cdn0.iconfinder.com/data/icons/law-justice-18/30/58-256.png" times="3" text="הצבעות פתוחות"/>  
        </th>
        <th>
        <VotingBar src="https://cdn3.iconfinder.com/data/icons/law-and-justice-outline-2/64/03-Gavel-128.png" times="0" text="הצבעות ממתינות לתשובה"/>      
        </th>
      </tr>
    </table>
   </div>
  );
}
