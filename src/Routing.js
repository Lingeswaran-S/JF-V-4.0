import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Home from "./components/Home";
import JobList from "./components/JobList";

// import QA from "./components/qa/QA";
// import SingleQA from "./components/qa/SingleQA";
import ReadCompany from "./components/ReadCompany";
import NavBar from "./components/NavBar";
function Routing() {
  return (
    <div class="container">
      <Router>
        <NavBar />
        <Route exact path="/jobs" component={JobList}></Route>
        <Route exact path="/read" component={ReadCompany}></Route>
        <Route exact path="/" component={Home}></Route>
      </Router>
    </div>
  );
}

export default Routing;
