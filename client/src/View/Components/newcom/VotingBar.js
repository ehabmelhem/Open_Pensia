import React,{useState,useEffect} from "react";
import "./VotingBar.css";

export default function VotingBar(props) {

  const [checkIfZero,setCheckIfZero] = useState(false);

useEffect(() => {
  if(props.times !== '0'){
    setCheckIfZero(true);
  }
  
}, [])

  return (
    <div dir="rtl" id="par" style={checkIfZero?{opacity:"100%"}:{opacity:"30%"}}>
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