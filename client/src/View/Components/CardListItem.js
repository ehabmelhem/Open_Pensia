import React from "react";
import "./CardListItem.css";

export default function CompanyBar(props) {
  return (
    <div dir="rtl" className="background">
      <div className="companyitem">
        <div className="Column" id={this.props.hideImg ? "hideImg" : "withImg"}>
          <img id="companyimage" src={props.logo} alt="companyimage" />
        </div>
        <div className="Column">
          <div id="companyname">
            <ol>
              <p>{props.name}</p>
              <p id="companytype">{props.par}</p>
            </ol>
          </div>
        </div>
        <div className="Column" id="nexticon">
          <img
            className="img1"
            src="https://image.flaticon.com/icons/png/512/130/130884.png"
            alt="nexticon"
          />
        </div>
      </div>
    </div>
  );
}
