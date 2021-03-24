import "./CandidateInfo.css";
import MainButton from "./MainButton";

function CandidateInfo({ officer }) {
  const cand_info = [
    { title: "ניסיון תעסוקתי", details: [officer.VC] },
    { title: "מומחיות פיננסית", details: [officer.financialExpert] },
    { title: "השכלה", details: [officer.education] },
    { title: "ניגוד עניינים", details: [officer.relative] },
    { title: "עבודות אחרות", details: [officer.otherJobs] },
    { title: "personalInterest", details: [officer.personalInterest] },
  ];

  return (
    <div>
      <div className="mainDiv">
        {cand_info.map((data, index) => {
          return (
            <div key={index}>
              <h4 className='body-h3'> {data.title} </h4>
              {data.details.map((d, index) => {
                return <p className='body-h5' key={index}> {d} </p>;
              })}

            </div>
          );
        })}
      </div>
      <a href='https://www.linkedin.com' target='blanck'>
        <button className='main-btn'>"צפייה בנתונים בלינקדאיןן"</button>
      </a>
    </div>
  );
}

export default CandidateInfo;
