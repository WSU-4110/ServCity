import "./index";
import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Pages/Home";
import AtHome from "./Components/Pages/AtHome";
import Alignment from "./Components/Pages/Alignment/Alignment";
import OilChange from "./Components/Pages/OilChange/OilChange";
import Brakes from "./Components/Pages/Brakes/Brakes";
import Tires from "./Components/Pages/Tires/Tires";
import FluidFlush from "./Components/Pages/FluidFlush/FluidFlash";
import Forum from "./Components/Pages/Forum/Forum";
import Scheduling from "./Components/Pages/Scheduling";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopSection from "./Components/TopSection";
import Footer from "./Components/Footer";
import { Postuserslocation } from "./API/Api";

/** import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom"; **/

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
    <div
      className="bg-container"
      style={{ backgroundImage: "url(/background.png)" }}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Alignment" element={<Alignment />} />
          <Route path="/Brakes" element={<Brakes />} />
          <Route path="/FluidFlush" element={<FluidFlush />} />
          <Route path="/OilChange" element={<OilChange />} />
          <Route path="/Tires" element={<Tires />} />
          <Route path="/AtHome" element={<AtHome />} />
          <Route path="/Forum" element={<Forum/>} />
          <Route path="/Scheduling" element={<Scheduling/>} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
