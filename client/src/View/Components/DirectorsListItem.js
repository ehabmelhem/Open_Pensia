import React, { useState } from "react";
import "./CardListItem.css";
import { Link } from "react-router-dom";

import { AiFillDislike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";

function DirectorListItem(props) {
  const [likestate, setlikestate] = useState(false);
  const [dislikestate, setdislikestate] = useState(false);

  function handelclicklike(e) {
    if (likestate == false && dislikestate == false) {
      var btn = document.querySelectorAll(".body-like");
      // console.log(btn);
      btn[0].classList.remove("body-like");
      btn[0].classList.add("body-likeActive");

      setlikestate(true);
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
    <div dir="rtl" className="background">
      <div className="companyitem">
        <div className="Column" id={"withImg"}>
          <img id="companyimage" src={props.logo} alt="companyimage" />
        </div>
        <div className="Column" id="formoreres1">
          <div id="companyname">
            <ol>
              <p id="companyName">{props.name}</p>
            </ol>
          </div>
        </div>
        <div className="Column" id="formoreres1">
          <div id="companyname">
            <ol>
              <p id="companyName">
                <AiFillLike className="body-like" onClick={handelclicklike} />
              </p>
            </ol>
          </div>
        </div>
        <div className="Column" id="formoreres1">
          <div id="companyname">
            <ol>
              <p id="companyName">
                <AiFillDislike
                  className="body-dislike"
                  onClick={handelclickdislike}
                />
              </p>
            </ol>
          </div>
        </div>
        <div className="Column" id="nexticon">
          <Link to={props.link}>
            <img
              className="img1"
              src="https://www.flaticon.com/svg/vstatic/svg/157/157933.svg?token=exp=1615923349~hmac=77235a528d58c44b98c447e7c9bcb905"
              alt="nexticon"
              onClick=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default DirectorListItem;
