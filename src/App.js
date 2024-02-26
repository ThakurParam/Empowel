import logo from "./logo.svg";
import "./App.css";
import { Base } from "./components/Base";
import { Topbar } from "./components/Topbar";
import { FindJobs } from "./components/FindJobs";
import { TrendingJobs } from "./components/TrendingJobs";

import { Popularjobs } from "./components/Popularjobs";
// import { Cardsss } from "./Assests/Cardsss";
import { Reviews } from "./components/Reviews";
import { Register } from "./components/Register";
import { JobOpening } from "./components/JobOpening";
import { Cardssss2 } from "./Assests/Cardssss2";

function App() {
  return (
    <div className="App">
      {/* <Paperz/> */}
      <Topbar />
      <JobOpening />
      <FindJobs />
      <TrendingJobs />
      <Register />
      <Popularjobs />
      <Reviews />
      <Base />
      {/* <Cardsss /> */}
      {/* <Cardssss2 /> */}
    </div>
  );
}

export default App;
