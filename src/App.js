import logo from "./logo.svg";
import "./App.css";
import { Base } from "./components/Base";
import { Topbar } from "./components/Topbar";
import { FindJobs } from "./components/FindJobs";
import { TrendingJobs } from "./components/TrendingJobs";

import { Popularjobs } from "./components/Popularjobs";
// import { Cardsss } from "./Assests/Cardsss";
import { Reviews } from "./components/Reviews";

function App() {
  return (
    <div className="App">
      {/* <Paperz/> */}
      <Topbar />
      <FindJobs />
      <TrendingJobs />
      <Popularjobs />
      <Reviews />
      <Base />
      {/* <Cardsss /> */}
    </div>
  );
}

export default App;
