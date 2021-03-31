import "./CandidateMoreInfo.css";
import MainButton from "./MainButton";
import Articles from "./Articles";
import { fetchOfficerArticles } from "../../redux";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function CandidateMoreInfo() {
  const dispatch = useDispatch();
  const officer = useSelector((state) => state.OfficerReducer);

  return (
    <div>
      <MainButton
        myClass="add-info-btn"
        tolink="/UploadInformation"
        text="יש לך מידע? לחצ/י כאן"
      />
      {officer.articles && <Articles articles={officer.articles} />}
    </div>
  );
}

export default CandidateMoreInfo;
