import "./index";
import ResponsiveAppBar from "./Components/AppBar";
import Home from "./Components/Home";
import Automotive from "./Components/Automotive/Automative";
import DIY from "./Components/DIY";
import Clutch from "./Components/Clutch&Breaks"
import Oiling from "./Components/Oiling"
import Batteries from "./Components/Batteries";
import Lights from "./Components/Lights";
import Denting from "./Components/Denting&Paint";
import Tires from "./Components/Tires";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import ACrepair from "./Components/ACrepair";

function App() {
  return (
    <>
      <Router>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Automotive" element={<Automotive />} />
          <Route path="/DIY" element={<DIY />} />
          <Route path="/Tires&Wheelcare" element={<Home/>} />
          <Route path="/Clutch&Breaks" element={<Clutch />}/>
          <Route path="/Oiling" element={<Oiling />}/>
          <Route path="/ACrepair" element={<ACrepair/>}/>
          <Route path="/Batteries" element={<Batteries/>}/>
          <Route path="/Lights" element={<Lights/>}/>
          <Route path="/Denting&Paint" elemtn={<Denting/>}/>
          <Route path="/Tires" element={<Tires/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
