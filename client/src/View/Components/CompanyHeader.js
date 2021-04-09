import Arrow from "./Arrow";
import "./VotingHeader.css";

function Header2({ question, company, percent }) {
  return (
    <header className="container1 voting-header">
      <div className="company-name">
        <Arrow arrowToLink="/CompaniesListSelect" color="#B7BCCC" />
        {company}
      </div>
      <div className="company-name">{percent}%</div>
      <div className="company-name">שיעור ההחזקה שלך</div>
      <div className="question-text">{question} ב{company}</div>
    </header>
  );
}

export default Header2;
