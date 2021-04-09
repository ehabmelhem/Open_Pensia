import React, { useEffect } from "react";
import VotingHeader from "../Components/VotingHeader";
import { useParams } from "react-router";
import { fetchOfficerData } from "../../redux";
import { useSelector, useDispatch } from "react-redux";
import DetailsOfVoting from "../Components/DetailsOfVoting";
import CandidateMoreInfo from "../Components/CandidateMoreInfo";
import CandidateInfo from "../Components/CandidateInfo";
import { BrowserRouter as Router, useRouteMatch, Route, Switch, Redirect } from "react-router-dom";

export default function InfoDirector() {
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchOfficerData(id));
  }, []);

  let officer = useSelector((state) => state.OfficerReducer);
  let company = useSelector((state) => state.CompanyReducer);
  let votingPer = [{ disApprovePer: "20%", ApprovePer: "80%" }];

  console.log(match);
  return (

    <div style={{ maxWidth: "600px", margin: "auto" }}>
      <VotingHeader
        directorName={officer.name}
        company={company.companyName}
        backToLink={`/VoteDirectors/${id}`}
        linkToOfficer={match.url}
      />

      <Switch>
        <Route path={`${match.path}/moreInfo`}>
          <CandidateMoreInfo />
        </Route>
        <Route path={`${match.path}/VotingDetails`}>
          <DetailsOfVoting voting={votingPer} />
        </Route>
        <Route path={`${match.path}/about`}>
          <CandidateInfo officer={officer} />
        </Route>
        <Route path={`${match.path}`}>
          <Redirect to={`${match.path}/about`} />
        </Route>
      </Switch>
    </div>

  );
}