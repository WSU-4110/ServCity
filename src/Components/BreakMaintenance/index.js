import "./brake.js";
import React, { useState, useEffect } from "react";
import { GetNearbyPlaces } from "../../API/Api";
import NearbyList from "../List/List_nearby";
import { Titleholder, InsightsContainer } from "./brake";

import InsightsOilChange from "../InsightsSections/InsightsOilChange";

export default function BrakeMaintenance() {
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
      <Titleholder>Nearby Places</Titleholder>
      <NearbyList result={result} />
      <Titleholder>Insights</Titleholder>
    </>
  );
}
