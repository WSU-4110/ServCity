import "./index";
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home';
import AtHome from './Components/Pages/AtHome';
import Alignment from './Components/Pages/Alignment';
import OilChange from './Components/Pages/OilChange';
import Brakes from './Components/Pages/Brakes';
import Tires from './Components/Pages/Tires';
import FluidFlush from './Components/Pages/FluidFlush';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopSection from "./Components/TopSection";
import Footer from './Components/Footer';


/** import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom"; **/

function App() {
  return (
    <div className='bg-container' style={{backgroundImage: 'url(/background.png)'}}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/Alignment' element={<Alignment/>} />
          <Route path='/Brakes' element={<Brakes/>} />
          <Route path='/Fluid Flush' element={<FluidFlush/>} />
          <Route path='/Oil Change' element={<OilChange/>} />
          <Route path='/Tires' element={<Tires/>} />
          <Route path='/At Home' element={<AtHome/>} />
        </Routes>
        <Footer/>
      </Router>
      
    </div>


  );
}

export default App;
