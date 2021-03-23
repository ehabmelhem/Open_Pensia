
import './InputText.css'
import {useState, useEffect } from "react";

function InputText({textenglish, texter }) {
    let [index,setindex]=useState(0);

    return (
        <div className="first">
            
            {console.log(texter)}
            <h3 className="textdisplay">
                {texter}
                {localStorage.setItem("firstname",texter)}
            </h3>
          

            <input  type="text" required onChange={(e) =>
      {
        {localStorage.setItem(textenglish,e.target.value)}
      }} className="textinput" ></input>
            
          
            <div className="line"></div>
            <div className="space"/>
        </div>
        
    );
}

export default InputText;