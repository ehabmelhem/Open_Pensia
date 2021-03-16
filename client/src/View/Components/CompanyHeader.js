import "./VotingHeader.css";

function Header2({ question, company, percent }) {
  return (
    <header className="container1 voting-header">
      <div className="company-name">{company}</div>
      <div className="company-name">{percent}</div>
      <div className="company-name">שיעור ההחזקה שלך</div>
      <div className="question-text">{question}</div>
    </header>
  );
}

export default Header2;
