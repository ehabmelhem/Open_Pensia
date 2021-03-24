import "./DetailsOfVoting.css";
import { AiFillDislike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import React, { useState } from "react";
import { addVote } from "../../redux";
import { useDispatch, useSelector } from "react-redux";

function DetailsOfVoting({ voting }) {
  const [likestate, setlikestate] = useState(false);
  const [dislikestate, setdislikestate] = useState(false);
  const dispatch = useDispatch();

  // securityID: action.payload.securityID,
  // questionID: action.payload.questionID,
  // directorID: action.payload.directorID,
  // // userID
  // vote: action.payload.vote,

  let companyData = useSelector(
    (state) =>
      !!state.CompanyReducer && {
        companyName: state.CompanyReducer.companyName,
        securityID: state.CompanyReducer.securityID,
      }
  );

  console.log(companyData);

  let officerData = useSelector(
    (state) =>
      !!state.OfficerReducer && {
        officerID: state.OfficerReducer.officerID,
      }
  );

  // console.log(officerData);

  function handelclicklike(e) {
    if (likestate === false && dislikestate === false) {
      var btn = document.querySelectorAll(".body-like");
      // console.log(btn);
      btn[0].classList.remove("body-like");
      btn[0].classList.add("body-likeActive");

      setlikestate(true);

      // redux update like

      dispatch(addVote({ securityID: companyData.securityID, vote: 1 }));
    }

    if (likestate == true) {
      var btn = document.querySelectorAll(".body-likeActive");

      btn[0].classList.remove("body-likeActive");
      btn[0].classList.add("body-like");
      setlikestate(false);

      dispatch(addVote({ securityID: companyData.securityID, vote: 0 }));
    }

    if (likestate == false && dislikestate == true) {
      var btn = document.querySelectorAll(".body-dislikeActive");
      // console.log(btn);
      btn[0].classList.remove("body-dislikeActive");
      btn[0].classList.add("body-dislike");

      setdislikestate(false);

      var btn = document.querySelectorAll(".body-like");
      // console.log(btn);
      btn[0].classList.remove("body-like");
      btn[0].classList.add("body-likeActive");

      setlikestate(true);

      dispatch(addVote({ securityID: companyData.securityID, vote: 1 }));
    }
  }
  function handelclickdislike(e) {
    // redux dislike update to false

    if (likestate == true && dislikestate == false) {
      var btn = document.querySelectorAll(".body-dislike");
      // console.log(btn);
      btn[0].classList.remove("body-dislike");
      btn[0].classList.add("body-dislikeActive");

      var btn = document.querySelectorAll(".body-likeActive");
      // console.log(btn);
      btn[0].classList.remove("body-likeActive");
      btn[0].classList.add("body-like");

      setlikestate(false);
      setdislikestate(true);

      dispatch(addVote({ securityID: companyData.securityID, vote: -1 }));
    }

    if (likestate == false && dislikestate == false) {
      var btn = document.querySelectorAll(".body-dislike");
      // console.log(btn);
      btn[0].classList.remove("body-dislike");
      btn[0].classList.add("body-dislikeActive");

      setdislikestate(true);

      dispatch(addVote({ securityID: companyData.securityID, vote: -1 }));
    }

    if (likestate == false && dislikestate == true) {
      var btn = document.querySelectorAll(".body-dislikeActive");
      // console.log(btn);
      btn[0].classList.remove("body-dislikeActive");
      btn[0].classList.add("body-dislike");

      setdislikestate(false);
      dispatch(addVote({ securityID: companyData.securityID, vote: 0 }));
    }
  }
  return (
    <div className="mainDiv">
      <div className="grid-container">
        <div className="percent-div">
          {voting.map(({ disApprovePer }, index) => {
            return <h1 key={index}> {disApprovePer} </h1>;
          })}

          <p> נגד </p>
        </div>
        <div>
          <span className="linebetween"> </span>
        </div>

        <div className="percent-div">
          {voting.map(({ ApprovePer }, index) => {
            return <h1 key={index}> {ApprovePer} </h1>;
          })}

          <p> בעד </p>
        </div>
      </div>

      {/* end content */}

      {/* question */}

      <p className="bold-font">מה הבחירה שלך ?</p>

      {/* end question */}

      {/* icons view */}
      <div className="grid-container">
        <div className="body-div">
          <AiFillDislike
            className="body-dislike"
            onClick={handelclickdislike}
          />
          <p> אני נגד </p>
        </div>{" "}
        <div> </div>
        <div className="body-div">
          <AiFillLike className="body-like" onClick={handelclicklike} />
          <p> אני בעד </p>
        </div>
      </div>
    </div>
  );
}

export default DetailsOfVoting;
