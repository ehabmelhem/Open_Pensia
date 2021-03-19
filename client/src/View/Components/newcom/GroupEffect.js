import React from "react";
import "./GroupEffect.css";

export default function GroupEffect(props) {
  return (
    <div dir="rtl" className="GroupEffect">
      <a className="percentage">{props.precent}%</a>
      <br></br>
      <p className="perTitle">{props.perTitle}</p>
      <p className="desc">
        {props.desc}
      </p>
    </div>
  );
}
