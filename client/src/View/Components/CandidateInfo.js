import React, { useEffect } from "react";
import "./CandidateInfo.css";
import MainButton from "./MainButton";

import { fetchOfficerData } from "../../redux";
import { useDispatch, useSelector } from "react-redux";

function CandidateInfo() {

  const officer = useSelector((state) => state.OfficerReducer);

  const cand_info = [
    { title: "ניסיון תעסוקתי", details: [officer.VC] },
    { title: "מומחיות פיננסית", details: [officer.financialExpert] },
    { title: "השכלה", details: [officer.education] },
    { title: "ניגוד עניינים", details: [officer.relative] },
    { title: "עבודות אחרות", details: [officer.otherJobs] },
    { title: "personalInterest", details: [officer.personalInterest] },
  ];

  return (
    <div>
      <div className="mainDiv">
        {cand_info.map((data, index) => {
          return (
            <div key={index}>
              <h4 className="body-h3"> {data.title} </h4>
              {data.details.map((d, index) => {
                return (
                  <p className="body-h5" key={index}>
                    {" "}
                    {d}{" "}
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className='footer2'>
        <a href="https://www.linkedin.com" target="blanck" >
          <button className="go-to-linkedin-btn">"צפייה בנתונים בלינקדאיןן"</button>
        </a>
      </div>
    </div>
  );
}

export default CandidateInfo;
