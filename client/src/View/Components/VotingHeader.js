import "./VotingHeader.css";
import AvatarImg from "./AvatarImg";
import Arrow from "./Arrow";
import MainNavBar from "./MainNavBar";

function VotingHeader({ directorName, company, backToLink, linkToOfficer }) {
  let infoDirectorTabs = [
    { id: 0, className: "active-nav", toLink: "/about", content: "סיכום פרטים" },
    { id: 1, className: "", toLink: "/moreInfo", content: "עוד מידע" },
    { id: 2, className: "", toLink: "/VotingDetails", content: "נתוני הצבעה" }
  ];
  return (
    <header className="container-voting-header voting-header">
      <div className='sub-header-container-voting'>
        <Arrow arrowToLink={backToLink} color="#B7BCCC"  />
        </div>
        <div className="company-name" style={{ marginBottom: '5vw' }}>{company}</div>
      <div>
        <AvatarImg src={"https://www.lego.com/cdn/cs/set/assets/blt0bf03ae97678db52/Batman2_App_Sidekick-Tall1.jpg?fit=crop&format=jpg&quality=80&width=800&height=600&dpr=1"} />
        <div className="candidate-name">{directorName}</div>
        <MainNavBar navTabs={infoDirectorTabs} linkToOfficer={linkToOfficer} />
      </div>
    </header>
  );
}

export default VotingHeader;