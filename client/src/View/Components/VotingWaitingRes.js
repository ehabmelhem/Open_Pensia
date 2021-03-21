import React from "react";
import "./VotingWaitingRes.css";

export default function VotingWaitingRes(props) {
  return (
    <div dir="rtl" className="CompContainer">
      <div className="Column1">
        <img
          className="StatusV_icon"
          src="https://cdn.icon-icons.com/icons2/2387/PNG/512/objection_and_appeal_judgment_icon_144661.png"
          alt="showList"
        />
      </div>
      <div className="StatusV_text">
        <b>x </b>
        <b>הצבעות ממתינות לתשובה</b>
      </div>
    </div>
  );
}
