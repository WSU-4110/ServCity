import { Home } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { Postuserslocation } from "../../API/Api";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./home.css";
function HomePage() {
  console.log("render Home.js");
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
    <div>
      <h1> Welcome to ServiCity</h1>

      <Link to="/Tires">
        <button type="submit" className="btn btn-primary">
          {" "}
          Tire Maintenance
        </button>
      </Link>

      <Link to="/FluidFlush">
        <button type="submit" className="btn btn-primary">
          {" "}
          Fluid Flush
        </button>
      </Link>

      <Link to="/TireAlignment">
        <button type="submit" className="btn btn-primary">
          {" "}
          Alignment
        </button>
      </Link>

      <Link to="/Oiling">
        <button type="submit" className="btn btn-primary">
          {" "}
          Oil Change
        </button>
      </Link>

      <Link to="/BreakMaintenance">
        <button type="submit" className="btn btn-primary">
          {" "}
          Break Maintenance
        </button>
      </Link>

      <Link to="/DIY">
        <button type="submit" className="btn btn-primary">
          {" "}
          Do it Yourself
        </button>
      </Link>
    </div>
  );

  <div>
    {" "}
    <img src={require("./Logo.png")}> </img>
  </div>;
}

export default HomePage;
