import { useEffect,useState } from "react";
import Arrow from "./Arrow";
import "./VotingHeader.css";
import { useDispatch, useSelector } from 'react-redux';

function Header2({ question, company, percent }) {
  let user = useSelector((state) => !!state.UserReducer && state.UserReducer);
  const [path,setPath] = useState('/CompaniesListSelect')
  useEffect(()=>{
    
    if(user.login === true){
setPath('/CompaniesList')
    }
    else{
      setPath('/CompaniesListSelect')
    }
    setTimeout(()=>{
      console.log("userrrrrrrrrrrrrrrrrrrrrrrrrr",path)
    },[3000])
    
  },[])
  return (
    <header className="container1 voting-header">
      <div className='sub-header-container-voting'>
        <Arrow arrowToLink={path} color="#B7BCCC" />
      </div>
      <div className="company-name">
        {company}
      </div>
      <div className="company-name">{percent}%</div>
      <div className="company-name">שיעור ההחזקה שלך</div>
      <div className="question-text">{question} ב{company}</div>
    </header>
  );
}

export default Header2;
