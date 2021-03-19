import "./VotingHeader.css";
import AvatarImg from "./AvatarImg";
import Arrow from "./Arrow";

function Header({ directorName, company, link }) {
  return (
    <header className="container1 voting-header">
      <Arrow arrowToLink={link} color="#B7BCCC" />
      <div className="company-name">{company}</div>
      <AvatarImg src="https://www.lego.com/cdn/cs/set/assets/blt0bf03ae97678db52/Batman2_App_Sidekick-Tall1.jpg?fit=crop&format=jpg&quality=80&width=800&height=600&dpr=1" />
      <div className="candidate-name">{directorName}</div>
    </header>
  );
}

export default Header;
