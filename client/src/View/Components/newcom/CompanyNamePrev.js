import React from "react";
import "./CompanyNamePrev.css";

export default function CompanyNamePrev(props) {
  return (
    <div id="divCompanyNames">
      <div id="divCompanyNamesIn">
      <p id="firstP">{props.fundName}</p>
      <p id="secP">{props.chanel}</p>
      </div>
    </div>
  );
}