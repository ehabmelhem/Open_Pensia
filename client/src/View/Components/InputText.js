
import './InputText.css'
import {useState, useEffect } from "react";

function InputText({textenglish, texter }) {
    let [index,setindex]=useState(0);

    return (
        <div>
            {console.log(texter)}
            <h3 className="textdisplay">
                {texter}
                {localStorage.setItem("firstname",texter)}
            </h3>
            <br></br>

            <input type="text"  onChange={(e) =>
      {
        {localStorage.setItem(textenglish,e.target.value)}
      }} className="textinput" ></input>
            
        </div>
    );
}

export default InputText;