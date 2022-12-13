import React, { useState, useEffect } from "react";
import { GetNearbyPlaces } from "../../../API/Api";
import Footer from "../../Footer";
import NearbyList from "../../List/List_nearby";
import { Titleholder, Content, InsightsContainer } from "./BrakeStyles";
import InsightsBreaks from "../../InsightsSections/InsightsBreaks";

export default function Brakes() {
  const [result, setResult] = useState([]);

  let service = "Brakes";

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
          <InsightsBreaks />
        </InsightsContainer>
        {/* <Footer /> */}
      </Content>
    </>
  );
}
