import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import oilchangepic from "../images/oilchange.png";
import alignmentpic from "../images/alignment.png";
import brakespic from "../images/brakes.png";
import fluidflashpic from "../images/fluid flush.png";
import tirespic from "../images/tire.png";
import athomepic from "../images/athome.png";

function Cards() {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items"></ul>
          <ul className="cards__items">
            <CardItem
              src={alignmentpic}
              text="Recommended to get your tires aligned every 6,000 miles."
              label="Alignment"
              path="/Alignment"
            />
            <CardItem
              src={brakespic}
              text="Recommended to have your brakes checked about every 6 months (when you rotate your tires)."
              label="Brakes"
              path="/Brakes"
            />
            <CardItem
              src={fluidflashpic}
              text="Recommendation based on vehicle. On average, recommended to have this done around every 30,000 miles or 2 years."
              label="Fluid Flush"
              path="/FluidFlush"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={oilchangepic}
              text="On average, vehicles are recommended to get their oil changed every 3,000 miles or 6 months."
              label="Oil Change"
              path="/OilChange"
            />
            <CardItem
              src={tirespic}
              text="Check your tires regularly! Check tire pressure every 2-4 weeks. It is recommended to get your tires rotated every 5,000 - 7,500 miles."
              label="Tires"
              path="/Tires"
            />
            <CardItem
              src={athomepic}
              text="Minor fix? No problem, learn how you can do it yourself at home today!"
              label="At Home"
              path="/AtHome"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
