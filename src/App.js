import logo from "./logo.svg";
import "./App.css";
import { Base } from "./components/Base";
import { Topbar } from "./components/Topbar";
import { FindJobs } from "./components/FindJobs";
import { TrendingJobs } from "./components/TrendingJobs";

import { Popularjobs } from "./components/Popularjobs";
import { Reviews } from "./components/Reviews";
import { Register } from "./components/Register";
import { JobOpening } from "./components/JobOpening";
import { HeadBox } from "./components/HeadBox";

function App() {
  return (
    <div className="App">
      <Topbar />
      <HeadBox />
      <JobOpening />
      <FindJobs />
      <TrendingJobs />
      <Register />
      <Popularjobs />
      <Reviews />
      <Base />
    </div>
  );
}

export default App;
