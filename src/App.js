import "./index";
import React, { useState, useEffect, useMemo } from "react";
import { Postuserslocation } from "./API/Api";
import ResponsiveAppBar from "./Components/AppBar";
import Home from "./Components/Home";
import DIY from "./Components/DIY";
import BrakeMaintenance from "./Components/BreakMaintenance";
import Oiling from "./Components/Oiling";
import Alignment from "./Components/TireAlignment";
import FluidFlush from "./Components/FluidFlush";
import Tires from "./Components/Tires";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [coordinates, setCoordinates] = useState({});
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);
  if (Object.keys(coordinates).length === 0) {
    console.log("Empty location object");
    console.log(coordinates);
  } else {
    console.log("not empty");
    console.log(coordinates);
    Postuserslocation(coordinates);
  }

  return (
    <>
      <Router>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/DIY" element={<DIY />} />
          <Route path="/BreakMaintenance" element={<BrakeMaintenance />} />
          <Route path="/Oiling" element={<Oiling />} />
          <Route path="/FluidFlush" element={<FluidFlush />} />
          <Route path="/Tires" element={<Tires />} />
          <Route path="/TireAlignment" element={<Alignment />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
