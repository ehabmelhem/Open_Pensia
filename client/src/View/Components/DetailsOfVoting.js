import "./DetailsOfVoting.css";
import { AiFillDislike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import React, { useState } from "react";
import { addVote } from '../../redux';
import { useDispatch, useSelector } from "react-redux";

function DetailsOfVoting({ voting }) {
  const [likestate, setlikestate] = useState(false);
  const [dislikestate, setdislikestate] = useState(false);
  const dispatch = useDispatch();

  let companyData = useSelector(
    (state) =>
      !!state.CompanyReducer && {
        companyName: state.CompanyReducer.companyName,
        securityID: state.CompanyReducer.securityID,
      }
  );

  let officerData = useSelector(
    (state) =>
      !!state.OfficerReducer && {
        officerID: state.OfficerReducer.officerID,
      }
  );

  function handelclicklike(e) {
    if (likestate === false && dislikestate === false) {
      var btn = document.querySelectorAll(".body-like");
      // console.log(btn);
      btn[0].classList.remove("body-like");
      btn[0].classList.add("body-likeActive");

      setlikestate(true);

      // redux update like

      dispatch(
        addVote(
          companyData.securityID,
          companyData.securityID, //need to UPDATE !!!!!
          officerData.officerID, //need to UPDATE !!!!!
          likestate
        )
      );
    }

    if (likestate == true) {
      var btn = document.querySelectorAll(".body-likeActive");

      btn[0].classList.remove("body-likeActive");
      btn[0].classList.add("body-like");
      setlikestate(false);
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
    }

    if (likestate == false && dislikestate == false) {
      var btn = document.querySelectorAll(".body-dislike");
      // console.log(btn);
      btn[0].classList.remove("body-dislike");
      btn[0].classList.add("body-dislikeActive");

      setdislikestate(true);
    }

    if (likestate == false && dislikestate == true) {
      var btn = document.querySelectorAll(".body-dislikeActive");
      // console.log(btn);
      btn[0].classList.remove("body-dislikeActive");
      btn[0].classList.add("body-dislike");

      setdislikestate(false);
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
