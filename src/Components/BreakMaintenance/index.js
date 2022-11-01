import "./clutch.css";
import React, { useState, useEffect } from "react";
import { GetNearbyPlaces } from "../../API/Api";
import Placelists from "../List/List_recommend";
export default function BrakeMaintenance() {
  const [results, setResults] = useState([]);
  let service = "Brakes";

  // useEffect(() => {
  //   GetPlacesData(service).then((results) => {
  //     setResults(results);
  //   });
  // }, []);

  return <Placelists results={results} />;
}
