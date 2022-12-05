import React, { useState, useEffect } from "react";
import { GetNearbyPlaces } from "../../API/Api";
import NearbyList from "../List/List_nearby";
import { Titleholder, InsightsContainer } from "./FluidFlush";
import InsightsOilChange from "../InsightsSections/InsightsOilChange";

export default function FluidFlush() {
  let service = "Fluidflush";
  const [result, setResult] = useState([]);

  useEffect(() => {
    GetNearbyPlaces(service).then((results) => {
      setResult(results);
    });
  }, []);

  return (
    <>
      <Titleholder>Nearby Places</Titleholder>
      <NearbyList result={result} />
      <Titleholder>Insights</Titleholder>
      <InsightsContainer>
        <InsightsOilChange />
      </InsightsContainer>
    </>
  );
}
