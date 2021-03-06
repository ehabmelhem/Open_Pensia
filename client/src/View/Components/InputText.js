
import './InputText.css'
import { useState, useEffect } from "react";

                       
function InputText({ textenglish, texter,userInfo, setUserInfo ,type }) {
    // let [index,setindex]=useState(0);
    useEffect(() => {

      });
    
    function handleInput(e) {
        const text = e.target.value;
        const tempUserInfo = {...userInfo}
        tempUserInfo[textenglish] = text;
        console.log(tempUserInfo)
        setUserInfo(tempUserInfo)
        localStorage.setItem(textenglish,e.target.value);

    }

    return (
        <div className="first">
            
            {console.log(texter)}
         

            <input type={type} placeholder={texter} onChange={handleInput} className="textinput" required/>
            <div className="line"></div>
            <div className="space"/>
        </div>

    );
}

export default InputText;