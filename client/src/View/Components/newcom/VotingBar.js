import React,{useState,useEffect} from "react";
import "./VotingBar.css";

export default function VotingBar(props) {

  const [checkIfZero,setCheckIfZero] = useState(null);

useEffect(() => {
  if(props.times !== 0){
    setCheckIfZero(true);
  }
  else{
    setCheckIfZero(false);
  }
}, [])

  return (
    <div dir="rtl" id="par" style={checkIfZero?{color:"#3D4257"}:{color:"gray"}}>
      <table>
        <tr>
          <th id="firstChild">
         <img id="imglogo" src={props.src} />   
          </th>
          <th>
          <p id="textL">{props.times} {props.text}</p>
          </th>
        </tr>
      </table>
    </div>
  );
}