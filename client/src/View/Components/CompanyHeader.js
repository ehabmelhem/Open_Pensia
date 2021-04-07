import Arrow from "./Arrow";
import "./VotingHeader.css";

function Header2({ question, company, percent }) {
  return (
    <header className="container1 voting-header">
      <div style={{marginBottom:'0'}} className="company-name">
        <table style={{width:"100%"}}>
          <tr>
            <th style={{paddingTop:'0px',width:"52px"}}>
              <Arrow arrowToLink="/CompaniesListSelect" color="#B7BCCC" />
            </th>
            <th colspan="2" style={{marginTop:"5px"}}>
                <p style={{margin:"0"}}>{company} </p>
            </th>
            <th style={{width:"52px"}}>
{/* {space} */}
            </th>
          </tr>
        </table>
        
     
      </div>
      <div style={{marginBottom:"0px"}} className="company-name">{percent}%</div>
      <div style={{marginBottom:"40px",padding:"0",fontSize:"16px"}} className="company-name">שיעור ההחזקה שלך</div>
      <div style={{marginTop:"50px"}} className="question-text">{question} ב{company}</div>
    </header>
  );
}

export default Header2;
