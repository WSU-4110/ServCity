import React, { useState, useEffect } from "react";
import NearbyList from "../../List/List_nearby";
import { GetNearbyPlaces } from "../../../API/Api";
import { Titleholder, InsightsContainer, Content } from "./AlignmentStyles";
import InsightsAlignment from "../../InsightsSections/InsightsAlignment";
import Footer from "../../Footer";

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
      <Content>
        <Titleholder>Nearby Places</Titleholder>
        <NearbyList result={result} />
        <Titleholder>Insights</Titleholder>
        <InsightsContainer>
          <InsightsAlignment />
        </InsightsContainer>
      </Content>
    </>
  );
}
