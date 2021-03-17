import React from "react";
import GroupEffect from "./GroupEffect";
import "./GroupEffectCont.css";

export default function GroupEffectCont(props) {
  return (
    <div dir="rtl" className="GroupEffectCont">
      <p className="rightComp">
        <GroupEffect></GroupEffect>
      </p>
      <div class="divider"></div>
      <p>
        <GroupEffect></GroupEffect>
      </p>
    </div>
  );
}
