import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from "./Pages/Home";
import CompanyForm from "./Pages/CompanyForm";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import "./App.css"

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
        <Route path="/about">
          {/* <Home /> */}
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
          {/* <Home /> */}
        </Route>
        <Route path="/feedback">
          {/* <Home /> */}
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
