import React, { useEffect } from "react";
import "./Arrow.css";
//import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Switch, Route, Link, NavLink,useHistory } from "react-router-dom";


export default function Arrow(props) {
const history = useHistory();
function goback(){
  history.goBack();
}
  // height width tolink text
  return (
    <div>
      <Link to={props.arrowToLink}>
        <ChevronRightIcon
          style={{ color: `${props.color}` }}
          className="ChevronRightIcon"
        />
      </Link>
    </div>
  );
}
