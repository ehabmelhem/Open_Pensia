import React from "react";
import GroupEffect from "./GroupEffect";
import "./GroupEffectCont.css";

export default function GroupEffectCont(props) {
  return (
    <div dir="rtl" className="GroupEffectCont">
      <p className="rightComp">
        <GroupEffect precent={50} perTitle="כח קבוצה" desc="ביחד אנחנו מהווים כח מול גוף הפנסייה"/>
      </p>
      <div class="divider"/>
      <p>
        <GroupEffect precent={14} perTitle="התחשבות החלטות" desc="אחוז ההחלטות ששהתקבלו לפי השקפתנו"/>
      </p>
    </div>
  );
}
