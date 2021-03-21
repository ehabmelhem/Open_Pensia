import React from "react";
import "./NavBarAfterLogIn.css";

export default function NavBarAfterLogIn(props) {
  return (
    <div dir="rtl" className="background">
      <div className="NavBar">
        <div className="Column">
          <img
            className="showList"
            src="https://k9h2z2w9.stackpathcdn.com/wp-content/themes/mexperience/icons/mex_hamburger.png"
            alt="showList"
          />
        </div>
        <div className="Column">
          <img
            id="companyimage"
            src="https://static.wixstatic.com/media/95a532_0d0ccdf77ad24f32af434ccf6f1ea76f.png/v1/fill/w_560,h_420,al_c,lg_1,q_85/95a532_0d0ccdf77ad24f32af434ccf6f1ea76f.webp"
            alt="companyimage"
          />
        </div>
        <div className="Column" id="nexticon">
          <img
            className="addProfile"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzCUm7B_JSCwRjuU899aMFhYIBv_P7CcWIIw&usqp=CAU"
            alt="addProfile"
          />
        </div>
      </div>
    </div>
  );
}
