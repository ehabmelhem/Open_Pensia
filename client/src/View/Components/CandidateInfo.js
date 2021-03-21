import "./CandidateInfo.css";
import MainButton from "./MainButton";

function CandidateInfo(props) {
  // const candidateInfo = props.candidateInfo;

  const cand_info = [
    {
      title: "ניסיון תעסוקתי",
      details: [" מנכל פוקס", "אלוף משנה 8200", "סמנכל כספים מחסני חשמל"],
    },
    {
      title: "מומחיות פיננסית",
      details: [" יש מומחיות"],
    },
    {
      title: "השכלה",
      details: [
        "לימודי משפטים",
        "קורס ברמנים ,בא מאסטר",
        "לימודי דת ורוח, האונבירסיטה הפתוחה",
      ],
    },
    {
      title: "ניגוד עניינים",
      details: ["אין"],
    },
    {
      title: "קרוב משפחה של בעל שליטה",
      details: ["בן דוד של מנכל הראל פיננסים "],
    },
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

      <info_block cand_info={cand_info} />
      <MainButton
        myClass="add-info-btn"
        tolink="/UploadInformation"
        text="צפייה בנתונים בלינקדאיןן"
      />
    </div>
  );
}

export default CandidateInfo;
