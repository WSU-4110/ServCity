import React, { useState, useEffect } from "react";
import NearbyList from "../../List/List_nearby";
import { GetNearbyPlaces } from "../../../API/Api";
import { Titleholder, InsightsContainer, Content } from "./TirresStyles";
import InsightsTireRotation from "../../InsightsSections/InsightsTireRotation";
import Footer from "../../Footer";

export default function Tires() {
  let service = "Tires";
  const [result, setResult] = useState([]);

  useEffect(() => {
    GetNearbyPlaces(service).then((results) => {
      setResult(results);
    });
  }, []);

  return (
    <>
      <Content>
        <Titleholder>Nearby Places</Titleholder>
        <NearbyList result={result} />
        <Titleholder>Insights</Titleholder>
        <InsightsContainer>
          <InsightsTireRotation />
        </InsightsContainer>
        {/* <Footer /> */}
      </Content>
    </>
  );
}
