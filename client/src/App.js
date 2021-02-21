import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
     <Switch>

<Route path="FirstPages_1">
<FirstPages />
</Route>

<Route path="FirstPages_2">
<FirstPages />
</Route>


<Route path="FirstPages_3">
<FirstPages />
</Route>


<Route path="QuestionsBeforeRegister">
  <QuestionsBeforeRegister />
</Route>

<Route path="VoteAccept">
  <FirstPages />
</Route>

<Route path="CompaniesListSelect">
  <CompaniesListSelect/>
</Route>

<Route path="VoteDirectors">
  <VoteDirectors/>
</Route>

<Route path="InfoDirector">
  <InfoDirector />
</Route>

<Route path="UploadInformation">
  <UploadInformation />
</Route>

<Route path="SignUpRequest">
  <VoteAccept />
</Route>

<Route path="SignUp">
  <SignUp />
</Route>

<Route path="AfterRegistrationVoting">
  <AfterRegistrationVoting/>
</Route>

<Route path="CompaniesList">
  <CompaniesList/>
</Route>

<Route path="CompanyInfo">
  <CompanyInfo />
</Route>


<Route path="VotesHistory">
  <VotesList />
</Route>

<Route path="VoteBending">
  <VotesList />
</Route>

<Route path="OpenVotes">
  <VotesList />
</Route>

<Route path="VoteDirectorsAfterLogin">
  <VoteDirectors />
</Route>

<Route path="InfoDirectorAfterLogin">
  <InfoDirector />
</Route>

     </Switch>
    </div>
  );
}

export default App;
