import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Pages/Home";
import CompanyForm from "./Pages/CompanyForm";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import "./App.css"
import HallOfFame from "./Pages/HallOfFame";
import HallOfFameForm from "./Pages/HallofFameForm";
import Error from "./Pages/Error";
import Feedback from "./Pages/Feedback";
import InterviewExperience from "./Pages/InterviewExperience";
import AddInterviewExperience from "./Pages/AddInterviewExperience";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/companyform">
          <CompanyForm />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/interview-experience">
          <InterviewExperience />
          {/* <Home /> */}
        </Route>
        <Route exact path="/halloffame">
          <HallOfFame />
        </Route>
        <Route exact path="/halloffame-form">
          <HallOfFameForm />
        </Route>
        <Route exact path="/feedback">
          <Feedback />
        </Route>
        <Route exact path="/addInterviewExperience">
          <AddInterviewExperience />
        </Route>
        <Route component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
