import "./index";
import ResponsiveAppBar from "./Components/AppBar";
import Home from "./Components/Home";
import DIY from "./Components/DIY";
import Alignment from "./Components/Alignment"
import OilChange from "./Components/OilChange"
import Brakes from "./Components/Brakes";
import Tires from "./Components/Tires";
import FluidFlush from "./Components/FluidFlush";


import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className='bg-container' style={{backgroundImage: 'url(/background.png)'}}>
      <Router>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Tires" element={<Tires/>} />
          <Route path="/Alginment" element={<Alignment />}/>
          <Route path="/OilChange" element={<OilChange />}/>
          <Route path="/FluidFlush" element={<FluidFlush/>}/>
          <Route path="/Brakes" element={<Brakes/>}/>
          <Route path="/DIY" element={<DIY/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
