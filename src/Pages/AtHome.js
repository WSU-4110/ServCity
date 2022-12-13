import React from "react";
import "../css/AtHomeStyles.css";

export default function AtHome() {
  return (
    <>
    <main>
      <div className="AtHomeContent">
      <div class="header"> <h1> AtHome Maintenance </h1> </div>
        <h2>
          Like a recipe to fix your car, we are a tool to provide quick and easy<br></br>
          access to the information you need - the parts you need, where they <br></br>
          can be found, and useful installation videos to help you get started
          AtHome.
        </h2>
      </div>
      <div>
        <img src={car}></img>
      </div>
      </main>
    </>
  );
}
