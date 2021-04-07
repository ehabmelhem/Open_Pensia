import React, { useState } from "react";
import "./DirectorsListItem.css";
import { Link } from "react-router-dom";
import { AiFillDislike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addVote } from "../../redux";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import IconButton from "@material-ui/core/IconButton";

function DirectorListItem(props) {
  const dispatch = useDispatch();
  const { companyName, securityID, questionID, officerId } = props.votingdata;

  // console.log(companyName, securityID, questionID, officerId);
  const [likestate, setlikestate] = useState(false);
  const [dislikestate, setdislikestate] = useState(false);
  const [voteState, setvoteState] = useState(0);

  let companyData = useSelector(
    (state) => !!state.CompanyReducer && state.CompanyReducer
  );
  console.log(companyData.securityID);

  let userData = useSelector((state) => state.UserReducer);
  console.log(userData.userid);

  function handelclicklike(e) {
    setlikestate(!likestate);
    setdislikestate(false);

    likestate ? setvoteState(1) : setvoteState(0);

    dispatch(
      addVote({
        securityID: companyData.securityID,
        questionID: questionID,
        officerID: officerId,
        userID: userData.userid,
        vote: voteState,
      })
    );
  }
  function handelclickdislike(e) {
    setlikestate(false);
    setdislikestate(!dislikestate);

    dislikestate ? setvoteState(-1) : setvoteState(0);

    dispatch(
      addVote({
        securityID: companyData.securityID,
        questionID: questionID,
        officerID: officerId,
        userID: userData.userid,
        vote: voteState,
      })
    );
  }

  return (
    <div dir="rtl" /*className="background"*/>
<table id="tableDirPhot">
  <tr id="allTR">
<th id="thPhoto">
        <div  className={"withImg"}>
          <img className="companyimage" src={props.logo} alt="companyimage" />
        </div>
        </th>
        <th id="thCompanyName">
        <div>
              <p  className="companyName">{props.name}</p>    
        </div>
        </th>
            <th id="thLike">
              <div className="companylike" >
                <AiFillLike
                  className={likestate ? "body-likeActive1" : "body-like1"}
                  onClick={handelclicklike}
                />
              </div>
              </th>
              <th id="thDisLike">
              <div  className="companylike">
                <AiFillDislike
                  className={dislikestate ? "body-dislikeActive1" : "body-dislike1"}
                  onClick={handelclickdislike}
                />
              </div>
              </th>

<th id="thInfoDirector">
        <div  className="nexticon">
          <Link to={props.link}>
            <img
              className="img1"
              src="data:image/png;base64,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"
              alt="nexticon"
              onClick={props.onCandidateSelect}
            />
          </Link>
        </div>
        </th>
      </tr>
      </table>
      </div>
  );
}
export default DirectorListItem;
