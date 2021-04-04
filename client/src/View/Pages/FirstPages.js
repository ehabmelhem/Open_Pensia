import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import QuestionsBeforeRegister from "./QuestionsBeforeRegister";
import "./FirstPages.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchCompanies } from "../../redux/CompaniesList/CompaniesListActions";
export default function FirstPages() {
  const history = useHistory();
  const [chanel, setChanel] = useState("");
  const [fundname, setFundname] = useState("");
  const state = useSelector((state) => state);
  const [length, setLength] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    setLength(state.CompaniesListReducer.companies.length);
  }, [state.CompaniesListReducer]);
  let firstPages = [
    {
      title: "למה זה חשוב",
      dec:
        "ורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט ",
      buttonTitle: "אהבתי ",
    },
    {
      title: "למה זה טוב לך",
      dec:
        "ורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ",
      buttonTitle: "מעולה ",
    },
    {
      title: "איך זה משרת אותך",
      dec:
        "ורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם",
      buttonTitle: "אני רוצה להתחיל ",
    },
    { title: "" },
    {
      title: "זהינו שיש לך החזקה ב10 חברות בשוק",
      dec: "והאם תרצה להשפיע",
      buttonTitle: "אני רוצה להשפיע ",
    },
  ];
  let [index, setindex] = useState(0);

  function next() {
    index++;
    if (index === 4) {
      dispatch(fetchCompanies(fundname, chanel));
      setindex(index);
    }
    if (index < 4) setindex(index);
    else {
      if (index > 4) history.push("CompaniesListSelect");
    }
  }
  function toLoginPage() {
    history.push("Login");
  }
  return (
    <div>
      {index === 3 ? (
        <div className="body">
          <QuestionsBeforeRegister
            chanelC={setChanel}
            fundnameC={setFundname}
          />
          
          <div></div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <button onClick={next}>אהבתי</button>
          <div></div>
          <a className="signin" onClick={toLoginPage}>
            יש לי כבר חשבון{" "}
          </a>
        </div>
      ) : (
        <div className="body">
          <div className="icon"></div>

   <br></br>
   <br></br>

          {length === 0 ? (
            <a className="title">{firstPages[index].title}</a>
          ) : (
            <a className="title">
              {"זהינו שיש לך החזקה ב" + length + " חברות בשוק"}
            </a>
          )}
          <p class="description">{firstPages[index].dec}</p>

           <button onClick={next}>{firstPages[index].buttonTitle}</button>
          <div></div>
          <a className="signin" onClick={toLoginPage}>
            יש לי כבר חשבון{" "}
          </a>
        </div>
      )}
    </div>
  );
}
