import "./index";
import ResponsiveAppBar from "./Components/AppBar";
import Home from "./Components/Home";
import DIY from "./Components/DIY";
import BrakeMaintenance from "./Components/BreakMaintenance"
import Oiling from "./Components/Oiling"
import Alignment from "./Components/TireAlignment"
import FluidFlush from "./Components/FluidFlush";
import Tires from "./Components/Tires";
import UserRegister from "./Components/Profile/UserRegister";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/DIY" element={<DIY />} />
          <Route path="/BreakMaintenance" element={<BrakeMaintenance />}/>
          <Route path="/Oiling" element={<Oiling />}/>
          <Route path="/FluidFlush" element={<FluidFlush/>}/>
          <Route path="/Tires" element={<Tires/>}/>
          <Route path="/TireAlignment" element={<Alignment/>}/>
          <Route path="/UserRegister" element={<UserRegister/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
