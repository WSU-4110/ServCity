import React, { useState, useEffect } from "react";
// import { GetNearbyPlaces, GetRecommendedPlaces } from "../../API/Api";
// import RecommendedList from "../List/List_recommend";
// import NearbyList from "../List/List_nearby";
import { Titleholder } from "./FluidFlush";

export default function FluidFlush() {
  let service = "Fluidflush";
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
