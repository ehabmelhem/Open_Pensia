import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { Switch, Route, Link, NavLink } from "react-router-dom";
import FirstPages from "./View/Pages/FirstPages";
import QuestionsBeforeRegister from "./View/Pages/QuestionsBeforeRegister";
import CompaniesListSelect from "./View/Pages/CompaniesListSelect";
import VoteDirectors from "./View/Pages/VoteDirectors";
import InfoDirector from "./View/Pages/InfoDirector";
import UploadInformation from "./View/Pages/UploadInformation";
import SignUp from "./View/Pages/SignUp";
import AfterRegistrationVoting from "./View/Pages/AfterRegistrationVoting";
import CompaniesList from "./View/Pages/CompaniesList";
import CompanyInfo from "./View/Pages/CompanyInfo";
import VotesList from "./View/Pages/VotesList";
import VoteAccept from "./View/Pages/VoteAccept";
import CardListItem from "./View/Components/CardListItem";
import ListQuestions from "./View/Components/body/ListQuestions";
import Body from "./View/Components/body/Body";
import Header from './View/Components/Header';
import NavBarLists from "./View/Components/NavBarLists";
import MainButton from "./View/Components/MainButton";
import SignUpRequest from "./View/Pages/SignUpRequest";


function App() {
  return (
    <div>
      <nav className="navBar">
        <ul>
          <li>
            <NavLink exact to="FirstPages_1">
              Page 1
            </NavLink>
          </li>
          <li>
            <NavLink exact to="FirstPages_2">
              Page 2
            </NavLink>
          </li>
          <li>
            <NavLink exact to="FirstPages_3">
              Page 3
            </NavLink>
          </li>
          <li>
            <NavLink exact to="QuestionsBeforeRegister">
              Page 4
            </NavLink>
          </li>
          <li>
            <NavLink exact to="VoteAccept">
              Page 5
            </NavLink>
          </li>
          <li>
            <NavLink exact to="CompaniesListSelect">
              Page 6
            </NavLink>
          </li>
          <li>
            <NavLink exact to="VoteDirectors">
              Page 31
            </NavLink>
          </li>
          <li>
            <NavLink exact to="InfoDirector">
              Page 15-19-32
            </NavLink>
          </li>
          <li>
            <NavLink exact to="UploadInformation">
              Page 33
            </NavLink>
          </li>
          <li>
            <NavLink exact to="SignUpRequest">
              Page 11
            </NavLink>
          </li>
          <li>
            <NavLink exact to="SignUp">
              Page 12-13
            </NavLink>
          </li>
          <li>
            <NavLink exact to="AfterRegistrationVoting">
              Page 17-27
            </NavLink>
          </li>
          <li>
            <NavLink exact to="CompaniesList">
              Page 18
            </NavLink>
          </li>
          <li>
            <NavLink exact to="CompanyInfo">
              Page 21-23-24
            </NavLink>
          </li>
          <li>
            <NavLink exact to="VotesHistory">
              Page 29
            </NavLink>
          </li>
          <li>
            <NavLink exact to="VoteBending">
              Page 28
            </NavLink>
          </li>
          <li>
            <NavLink exact to="OpenVotes">
              Page NO NUMBER OPEN VOTES LIST
            </NavLink>
          </li>
          <li>
            <NavLink exact to="VoteDirectorsAfterLogin">
              Page 31
            </NavLink>
          </li>
          <li>
            <NavLink exact to="InfoDirectorAfterLogin">
              Page 15-19-32
            </NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
      <Route path="/TestDashBoardIbraheem">
        <Header company='בנק הפועלים' perception='18.3'/>
        <MainButton myClass='main-button' text='הצבעת הרווחת' tolink='InfoDirectorAfterLogin'/>
        </Route>
        <Route path="/TestDashBoardMosaab">
      <Body />
        <NavBarLists />

        </Route>
        <Route path="/FirstPages_1">
          <FirstPages />
        </Route>

        <Route path="/FirstPages_2">
          <FirstPages />
        </Route>

        <Route path="/FirstPages_3">
          <FirstPages />
        </Route>

        <Route path="/QuestionsBeforeRegister">
          <QuestionsBeforeRegister />
        </Route>

        <Route path="/VoteAccept">
          <FirstPages />
        </Route>

        <Route path="/CompaniesListSelect">
          <CompaniesListSelect />
        </Route>

        <Route path="/VoteDirectors">
          <VoteDirectors />
        </Route>

        <Route path="/InfoDirector">
          <InfoDirector />
        </Route>

        <Route path="/UploadInformation">
          <UploadInformation />
        </Route>

        <Route path="/SignUpRequest">
          <SignUpRequest />
        </Route>

        <Route path="/SignUp">
          <SignUp />
        </Route>

        <Route path="/AfterRegistrationVoting">
          <AfterRegistrationVoting />
        </Route>

        <Route path="/CompaniesList">
          <CompaniesList />
        </Route>

        <Route path="/CompanyInfo">
          <CompanyInfo />
        </Route>

        <Route path="/VotesHistory">
          <VotesList title="היסטורית הצבעות" sort={0}/>
        </Route>

        <Route path="/VoteBending">
          <VotesList title="הצבעות ממתינות לתשובה" sort={1}/>
        </Route>

        <Route path="/OpenVotes">
          <VotesList title="הצבעות פתוחות" sort={2}/>
        </Route>

        <Route path="/VoteDirectorsAfterLogin">
          <VoteDirectors />
        </Route>

        <Route path="/InfoDirectorAfterLogin">
          <InfoDirector />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
