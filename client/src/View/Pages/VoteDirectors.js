import React, { useEffect } from 'react';
import Header2 from "../Components/CompanyHeader";
import MainButton from "../Components/MainButton";
import DirectorListItem from "../Components/DirectorsListItem";

import { fetchOfficerData } from '../../redux';
import { useDispatch, useSelector } from 'react-redux';

// import Arrow from "../Components/Arrow";

export default function VoteDirectors() {

  let directors = useSelector(state => !!state.CompanyDataReducer && state.CompanyDataReducer.defaultQuestion.officers);
  let defaultQuestion = useSelector(state => !!state.CompanyDataReducer && state.CompanyDataReducer.defaultQuestion);
  let companyName = useSelector(state => !!state.CompanyDataReducer && state.CompanyDataReducer.companyName);
  useEffect(() => {

  }, []);
  function handleCandidateSelect(id) {
    console.log(id);
    dispatch(fetchOfficerData(id));
  }
  return (
    <div>
      <div style={{ maxWidth: "600px", margin: "auto" }}>
        <Header2
          percent={defaultQuestion.ave}
          question={defaultQuestion.topic}
          company={companyName}
        />

        <div>
          <p>בחר/י שני דירקטורים רגילים</p>

          {!!directors && directors.map((director) => {
            console.log(director);
            return (
              <div>
                <DirectorListItem
                  logo={"https://picsum.photos/200"}
                  name={director.Officers_Name}
                  link={`InfoDirector/${director.Officers_ID}`}
                  onCandidateSelect={() => handleCandidateSelect(director.Officers_ID)}
                />
              </div>
            );
          })}

        </div>
        <MainButton text="שלח/י את ההצבעה שלי" tolink={"SignUpRequest"} />
      </div>
    </div>
  );
}
