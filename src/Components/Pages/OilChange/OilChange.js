import React, { useState, useEffect } from "react";
import "./OilChangeStyles.js";
import NearbyList from "../../List/List_nearby";
import { GetNearbyPlaces } from "../../../API/Api";
import { Titleholder, InsightsContainer, Content } from "./OilChangeStyles";
import InsightsOilChange from "../../InsightsSections/InsightsOilChange";
import Footer from "../../Footer";

export default function OilChange({ isOpen }) {
  let service = "Oilchange";
  const [result, setResult] = useState([]);

  useEffect(() => {
    GetNearbyPlaces(service).then((results) => {
      setResult(results);
    });
  }, []);
  console.log(result);

  return (
    <>
      <Content>
        <Titleholder>Nearby Places</Titleholder>
        <NearbyList result={result} />
        <Titleholder>Insights</Titleholder>
        <InsightsContainer>
          <InsightsOilChange />
        </InsightsContainer>
        {/* <Footer /> */}
      </Content>
    </>
  );
}
