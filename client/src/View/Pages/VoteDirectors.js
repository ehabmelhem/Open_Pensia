import React, { useEffect } from 'react';
import Header2 from "../Components/CompanyHeader";
import MainButton from "../Components/MainButton";
import DirectorListItem from "../Components/DirectorsListItem";
import { fetchCompanyDefaultQuestion } from '../../redux';
import { fetchOfficerData } from '../../redux';
import { useDispatch, useSelector } from 'react-redux';

// import Arrow from "../Components/Arrow";

export default function VoteDirectors() {

  const dispatch = useDispatch();

  const { companyName, securityID, defaultQuestion } = useSelector(state => state.CompanyReducer)

  console.log(useSelector(state => state.CompanyReducer))
  console.log(!!defaultQuestion && defaultQuestion.officers)
  console.log(defaultQuestion)

  useEffect(() => {
    dispatch(fetchCompanyDefaultQuestion(securityID, '', ''));
  }, []);
  // function handleCandidateSelect(id) {
  //   console.log(id);
  //   dispatch(fetchOfficerData(id));
  // }
  let officers = !!defaultQuestion && defaultQuestion.officers;
  return (
    <div>
      <div style={{ maxWidth: "600px", margin: "auto" }}>
        <Header2
          percent={!!defaultQuestion && defaultQuestion.ave}
          question={!!defaultQuestion && defaultQuestion.topic}
          company={companyName}
        />

        <div>
          <p>מי היית רוצה שיכהן כדירקטור?</p>

          {
            officers && officers.map((officer) => {
              console.log(officer);
              return (

                <DirectorListItem
                  key={officer.officerId}
                  logo={"https://www.lego.com/cdn/cs/set/assets/blt0bf03ae97678db52/Batman2_App_Sidekick-Tall1.jpg?fit=crop&format=jpg&quality=80&width=800&height=600&dpr=1"}
                  name={officer.officerName}
                  link={`/InfoDirector/${officer.officerId}`}
                  // onCandidateSelect={() => handleCandidateSelect(officer.officerId)}
                />

              );
            })}

        </div>
        <MainButton text="שלח/י את ההצבעה שלי" tolink={"/SignUpRequest"} />
      </div>
    </div>
  );
}
