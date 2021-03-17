import React,{useState} from "react";
import "./NavBarAfterLogIn.css";
import ListNav from "./ListNav";
import SimpleSlide from "./Slidebar";

export default function NavBarAfterLogIn(props) {

  const [ToF,setToF] = useState(false);

  function showbar(){
    setToF(!ToF);
  }
  function exit(){
    setToF(false);
}
  return (
<div>
      <table className="NavBar">
        <th className="ColumnP" id="firstCol" >
          <img
            className="addProfile"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzCUm7B_JSCwRjuU899aMFhYIBv_P7CcWIIw&usqp=CAU"
            alt="addProfile"
          />
        </th>
        <th className="ColumnP" id="companyThImage">
          <img
            id="companyimageAfterLogin"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjFQqF5sHGLOKhSveoBvcgrSr4FJ7-borKA&usqp=CAU"
            alt="companyimage"
          />
        </th>
        <th className="ColumnP" id="leftCol">
          <img
          onClick={showbar}
            className="showList"
            src="https://k9h2z2w9.stackpathcdn.com/wp-content/themes/mexperience/icons/mex_hamburger.png"
            alt="showList"
          />
        </th>
      </table>
      <SimpleSlide ToF={ToF}/>
</div>
  );
}
/**
 *       <Animated animationIn="slideInRight" animationOut="zoomOutRight" animationInDuration={1000} animationOutDuration={1000} isVisible={ToF}>

 */