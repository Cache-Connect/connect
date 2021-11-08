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

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/companyform">
          <CompanyForm />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/interview">
          {/* <Home /> */}
        </Route>
        <Route path="/halloffame">
          <HallOfFame />
        </Route>
        <Route path="/halloffame-form">
          <HallOfFameForm />
        </Route>
        <Route path="/feedback">
          {/* <Home /> */}
        </Route>
        <Route component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
