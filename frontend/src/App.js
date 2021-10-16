import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/about">
          {/* <Home /> */}
        </Route>
        <Route path="/team">
          {/* <Home /> */}
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
      </Router>
    </div>
  );
}

export default App;
