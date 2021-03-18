//import { Link } from "@material-ui/core";
import React, { useState,useEffect } from "react";
import "./CardListItem.css";
import { Link } from "react-router-dom";

function CardListItem(props) {
  const [status,setStatus]=useState("unknown");

useEffect(() => {
  console.log(props.status)
  switch (props.status) {
    case "Open":
      setStatus("ממתין להצבעתך") 
      break;
      case "Top":
        setStatus("ממתין להצבעתך")
        break;
        case "results":
          setStatus("ההצבעה נסגרה")
          break;
  
    default:
      setStatus("UnKnown")
      break;
 }
},[])

  return (
    <div dir="rtl" className="background">
      <div className="companyitem">
        <div className="Column" id={props.hideImg ? "hideImg" : "withImg"}>
          <img id="companyimage" src={props.logo} alt="companyimage" />
        </div>
        <div className="Column" id="formoreres1">
          <div id="companyname">
            <ol>
              <p id="companyName">{props.name}</p>
              <p id="companytype">{status}</p>
            </ol>
          </div>
        </div>
        <div className="Column" id="nexticon">
          <Link to={props.toLink}>
          <img
            className="img1"
            src="https://image.flaticon.com/icons/png/512/130/130884.png"
            alt="nexticon"
          />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default CardListItem;