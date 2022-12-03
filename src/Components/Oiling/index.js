import React, { useState, useEffect } from "react";
import "./Oiling.js";
import NearbyList from "../List/List_nearby";
import { GetNearbyPlaces } from "../../API/Api";
import { Titleholder } from "./Oiling";
import Maps from "../Map/maps";

export default function Oiling({ isOpen }) {
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
      <Titleholder>Nearby Places</Titleholder>
      <NearbyList result={result} />
    </>
  );
}
