import React, { useState, useEffect } from "react";
import NearbyList from "../List/List_nearby";
import { GetNearbyPlaces } from "../../API/Api";
import { Titleholder } from "./tires";

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
      <Titleholder>Nearby Places</Titleholder>
      <NearbyList result={result} />
    </>
  );
}
