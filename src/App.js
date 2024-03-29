import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import FindJobs from "./page/Findjob";

import HomePage from "./page/home";
import React from "react";

import TopCompanies from "./page/Top companies";
import CompanyDetailPage from "./components/CompanyDetail/companydetailpage";
import DetailPage from "./page/Company detail/detailpage";
import Pagination from "./Assests/pagination";
import Loginpage from "./page/Login/loginpage";
import JobDetail from "./page/Findjob/jobdetail";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/findjobs" element={<FindJobs />} />
          <Route path="/topcompanies" element={<TopCompanies />} />
          <Route path="/company-detail" element={<DetailPage />} />
          <Route path="/job-detail" element={<JobDetail />} />
        </Routes>
      </React.Fragment>
    </Router>
    // <Pagination />
    // <Loginpage />
  );
}

export default App;
