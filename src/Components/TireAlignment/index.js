import React, { useState, useEffect } from "react";
import RecommendedList from "../List/List_recommend";
import NearbyList from "../List/List_nearby";
import { GetNearbyPlaces, GetRecommendedPlaces } from "../../API/Api";
import { Titleholder } from "./alignment";
import Insightsalignment from "../InsightsSections/InsightsAlignment";

export default function Alignment() {
  let service = "Alignment";
  const [result, setResult] = useState([]);
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    GetNearbyPlaces(service).then((results) => {
      setResult(results);
    });
  }, []);
  useEffect(() => {
    GetRecommendedPlaces(service).then((results) => {
      setRecommended(results);
    });
  }, []);

  return (
    <>
      <Titleholder>Recommended</Titleholder>
      <RecommendedList recommended={recommended} />
      <Titleholder>Nearby Places</Titleholder>
      <NearbyList result={result} />
    </>
  );
}
