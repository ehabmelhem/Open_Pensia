import React from "react";
import './ButtonShow.css'

export default function ButtonShow(props) {
  return <button class={props.selected?"selected":"notSelected"} id="buttonShow">
      {props.text}
      </button>
}
