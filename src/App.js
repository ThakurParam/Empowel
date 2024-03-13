import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import FindJobs from "./page/Findjob";

import HomePage from "./page/home";
import React from "react";

import TopCompanies from "./page/Top companies";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/findjobs" element={<FindJobs />} />
          <Route path="/topcompanies" element={<TopCompanies />} />
        </Routes>
      </React.Fragment>
    </Router>
  );
}

export default App;
