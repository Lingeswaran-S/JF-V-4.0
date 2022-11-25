import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import JobList from "./components/JobList";
import NavBar from "./components/NavBar";
import Test from "./components/Test";
import UploadJob from "./UploadJob";
function Routing() {
  return (
    <div class="container">
      <Router>
        <NavBar />
        <Route exact path="/jobs" component={JobList}></Route>
        {/* <Route exact path="/read" component={ReadCompany}></Route> */}
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/:class/:id" component={Test}></Route>
        <Route exact path="/uploadJob" component={UploadJob}></Route>
      </Router>
    </div>
  );
}

export default Routing;
