import './App.css';
import ResponsiveAppBar from './Components/AppBar';
import Home from './Components/Home'
import Automotive from './Components/Automotive'
import DIY from './Components/DIY'
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
      <ResponsiveAppBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Automotive" element={<Automotive/>} />
        <Route path="/DIY" element={<DIY/>} />
      </Routes>
    </Router>
    </>

  );
}

export default App;
