import React, { useState, useEffect } from "react";
import RecommendedList from "../List/List_recommend";
import NearbyList from "../List/List_nearby";
import { GetNearbyPlaces, GetRecommendedPlaces } from "../../API/Api";
import { Titleholder } from "./alignment";

export default function Alignment() {
  let service = "Alignment";
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
    </>
  );
}
