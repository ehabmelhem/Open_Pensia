import React from "react";
import "./OpenVoting.css";

export default function OpenVoting(props) {
  return (
    <div dir="rtl" className="CompContainer">
      <div className="Column1">
        <img
          className="OpenV_icon"
          src="http://cdn.onlinewebfonts.com/svg/img_336993.png"
          alt="showList"
        />
      </div>
      <div className="OpenV_text">
        <b>x </b>
        <b>הצבעות פתוחות</b>
      </div>
    </div>
  );
}