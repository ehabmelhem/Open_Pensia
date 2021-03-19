import React from "react";
import "./CompanyVotingStatus.css";
import OpenVoting from "./OpenVoting";
import VotingWaitingRes from "./VotingWaitingRes";

export default function CompanyVotingStatus(props) {
  return (
    <div dir="rtl" className="VotingWaitingResCont">
      <p>
        <OpenVoting></OpenVoting>
      </p>
      <p>
        <VotingWaitingRes></VotingWaitingRes>
      </p>
    </div>
  );
}
