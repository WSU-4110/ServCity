import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./TopSection.css";
function TopSection() {
  return (
    <div className="top-container">
      <h1>SERVICITY</h1>
      <p>find the right service for your vehicle</p>
      <div className="top-btns">
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          ALIGNMENT
        </Button>

        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          BRAKES
        </Button>

        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          FLUID FLUSH
        </Button>

        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          OIL CHANGE
        </Button>

        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          TIRES
        </Button>

        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          AT HOME
        </Button>
      </div>
    </div>
  );
}

export default TopSection;
