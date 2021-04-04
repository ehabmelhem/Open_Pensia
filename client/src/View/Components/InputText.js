
import './InputText.css'
import { useState, useEffect } from "react";

                       
function InputText({ textenglish, texter,userInfo, setUserInfo }) {
    // let [index,setindex]=useState(0);

    function handleInput(e) {
        const text = e.target.value;
        const tempUserInfo = {...userInfo}
        tempUserInfo[textenglish] = text;
        console.log(tempUserInfo)
        setUserInfo(tempUserInfo)

    }

    return (
        <div className="first">
            
            {console.log(texter)}
         
            <br></br>
            <input type="text" placeholder={texter} onChange={handleInput} className="textinput" />
            <div className="line"></div>
            <div className="space"/>
        </div>

    );
}

export default InputText;