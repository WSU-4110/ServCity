import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AtHome from "./Pages/AtHome";
import Brakes from "./Pages/Brakes";
import Fluid from "./Pages/Fluid";
import Lights from "./Pages/Lights";
import Oil from "./Pages/Oil";
import Filter from "./Pages/Filter";

// import { collection, doc} from "@firebase/firestore";
// import { useCollectionData } from "react-firebase-hooks/firestore";
// import { db } from "./Database/firebase";
// // import SubItems from "./SubItems";
// import Home from "./Database/Home";
// // import AddNew from "./AddNew";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AtHome />} />
        <Route path="/Brakes" element={<Brakes />} />
        <Route path="/Filter" element={<Filter />} />
        <Route path="/Fluid" element={<Fluid />} />
        <Route path="/Lights" element={<Lights />} />
        <Route path="/Oil" element={<Oil />} />
      </Routes>
    </Router>
  );
}

export default App;

// DATABASE APP().JS FILE

// function App() {

//   // const query = collection(db, "Cars");

//   // const FuelF = collection(db.collection('Cars').doc('FordFocus2015').collection('FilterChange').doc('FuelFilter'));

//   // const FuelF = doc(db, "Cars", "FordFocus2015", "FilterChange", "FuelFilter" );
//   // const [docs, loading, error] = useCollectionData(FuelF);

//   return (
//     <>
//         <h1>Cars</h1>

//         {/* {loading && "Loading..."} */}
//         {/* <ul>
//           {docs.map((doc) => (
//             <div key={Math.random()}>
//               <li>{doc.name}</li>

//               <SubItems path={`Cars/${doc.name}`} />
//             </div>
//           ))}
//         </ul> */}
//         <Home/>

//       </>
//   );
// }

// export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
