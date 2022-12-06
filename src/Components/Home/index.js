import { Home } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./home.css";
import LoginHandler from "../Login/LoginMain";

function HomePage() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [timedPopup, setTimedPopup] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 3000);
  }, []);

  return (
    <>
      <div>
        <h1> Welcome to ServiCity</h1>

        <LoginHandler />

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
    </>
  );
}

export default HomePage;
