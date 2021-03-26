//import { Link } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import {useDispatch} from 'react-redux';
import "./CardListItem.css";
import { Link } from "react-router-dom";


//redux
import { setCompanyDetails} from '../../redux/Company/CompanyActions'

function CardListItem(props) {

  const {companyName, securityID ,sectorNisha} = props;

  const [status, setStatus] = useState("unknown");
  const dispatch = useDispatch();


  useEffect(() => {


 
    switch (props.status) {
      case "Open":
        setStatus("ממתין להצבעתך")
        break;
      case "Top":
        setStatus("ממתין להצבעתך")
        break;
        case "Pending":
          setStatus("ההצבעה נסגרה")
          break;
      case "results":
        setStatus("ההצבעה נסגרה")
        break;

      default:
        setStatus("UnKnown")
        break;
    }
  }, [])

  function handleClick(){
    console.log('click......');

    dispatch(setCompanyDetails(companyName, securityID))
  }

  return (
    <Link to={props.toLink}>

      <div dir="rtl" className="background" onClick={handleClick}>
        <div className="companyitem">
          <div className="Column" id={props.hideImg ? "hideImg" : "withImg"}>
            <img id="companyimage" src={props.logo} alt="companyimage" />
          </div>
          <div className="Column" id="formoreres1">
            <div id="companyname">
              <ol>
                <p id="companyName">{props.companyName}</p>
                <p id="companytype">{status}</p>
              </ol>
            </div>
          </div>
          <div className="Column" id="nexticon">

            <img
              className="img1"
              src="https://image.flaticon.com/icons/png/512/130/130884.png"
              alt="nexticon"
            />

          </div>
        </div>

      </div>
    </Link >

  );
}
export default CardListItem;