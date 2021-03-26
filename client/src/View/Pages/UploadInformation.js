import React from "react";
import './UploadInformation.css';

export default function UploadInformation() {
  return (
    <div id="allPage">
         <div id="center">
      <div id="icon"></div>
      <div id="titleCover"> 
      <a id="title">העלאת מידע</a>
      </div>
      </div>
      <div>
        <div>
          <form id="registerForm">
            <label>
            <p className="titleOfForm">מידע עבור </p>
              <input className="inputOfForm" type="text" name="name" />
            </label>
            <label>
            <p className="titleOfForm">  כותרת</p>
              <input className="inputOfForm" type="text" name="title" />
            </label>
            <label>
            <p className="titleOfForm">  תיאור</p>
              <input className="inputOfForm" type="text" name="desc" />
            </label>
            <label>
            <p className="titleOfForm"> קישור עבור המידע</p>
              <input className="inputOfForm" type="text" name="link" />
            </label>
            <br/>
            <input id="buttonInputReg"  type="submit" value="שתפ/י" />
          </form>
        </div>
      </div>
    </div>
  );
}
