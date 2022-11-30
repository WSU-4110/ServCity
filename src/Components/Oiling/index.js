import React, { useState, useEffect } from "react";
import "./Oiling.js";
// import RecommendedList from "../List/List_recommend";
// import NearbyList from "../List/List_nearby";
import { GetNearbyPlaces, GetRecommendedPlaces } from "../../API/Api";
import { Titleholder } from "./Oiling";

export default function Oiling() {
  let service = "Oilchange";
  const [result, setResult] = useState([]);

  // useEffect(() => {
  //   GetNearbyPlaces(service).then((results) => {
  //     setResult(results);
  //   });
  // }, []);

  return (
    <>
      <Titleholder>Nearby Places</Titleholder>
      {/* <NearbyList result={result} /> */}
    </>
  );
}
