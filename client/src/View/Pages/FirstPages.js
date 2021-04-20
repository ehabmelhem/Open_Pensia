import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import QuestionsBeforeRegister from "./QuestionsBeforeRegister";
import "./FirstPages.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchCompanies } from "../../redux/CompaniesList/CompaniesListActions";
import { Animated } from "react-animated-css";
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
      dec: 'הפנסיה של כולנו שווה היום  2 טרליון שקל\
          אלה מנוהלים ע"י קומץ מצומצם של גופים ובהם קומץ מצומצם של עובדים שאחראים על הכסף הזה\
          האם אנחנו יודעים לטובת מי הם מנהלים את כספי הפנסיה שלנו?',
      buttonTitle: "אהבתי ",
    },
    {
      title: "למה זה טוב לך",
      dec: '  שקיפות ומעורבות: היום אנחנו לא יכולים לדעת איפה מושקע הכסף שלנו. אנחנו יודעים בגדול שהוא במניות או במוצרים פיננסיים אחרים, אבל איזה מניות ובכמה אחוזים אנחנו לא יודעים!\
       כבעלי מניות בחברה מסוימת, אנחנו גם בעלי עניין ולכן אנחנו יכולים להצביע בהחלטות דירקטריון',
      buttonTitle: "מעולה ",
    },
    {
      title: "איך זה משרת אותך",
      dec:
        "הפלטפורמה תאפשר לך זיהוי הגוף המנהל ומסלולי החיסכון הפנסיוני של העמית, קבלת רשימת החברות הציבוריות בהם העמית הינו מושקע כבעל מניות (באמצעות קרנות החיסכון הפנסיוני), אפשרות לקביעת עמדה באשר לאופן ההצבעה, והעברת העמדה הקולקטיבית לגוף המנהל המממש את זכות ההצבעה",
      buttonTitle: "אני רוצה להתחיל ",
    },
    {
      title: "זהינו שיש לך החזקה ב10 חברות בשוק",
      dec: "והאם תרצה להשפיע",
      buttonTitle: "אני רוצה להשפיע ",
    },
  ];
  let [index, setindex] = useState(0);

  function next() {
    console.log(index)
    index++;
    if (index === 4) {
      dispatch(fetchCompanies(fundname, chanel));
      setindex(index);
      history.push("/CompaniesListSelect")
    }
    if (index < 4) setindex(index);
    else {
      if (index > 4) history.push("/CompaniesListSelect");
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
            next={next}
            toLoginPage={toLoginPage}
          />
          
        

          
        </div>
        
      ) : (
        <div className="body">
        <div id="divOnCircle"> <div className="icon1" ></div></div>

   <br></br>
   <br></br>

          {length === 0 ? (
            <a className="title">{firstPages[index].title}</a>
          ) : (
            <a className="title">
              {"זהינו שיש לך החזקה ב" + length + " חברות בשוק"}
            </a>
          )}
          <p className="description_firstPages">{firstPages[index].dec}</p>

           <button id="button11" onClick={next}>{firstPages[index].buttonTitle}</button>
          <div></div>
          <a className="signin" onClick={toLoginPage}>
            יש לי כבר חשבון
          </a>
        </div>
      )}
    </div>
   
  );
}
