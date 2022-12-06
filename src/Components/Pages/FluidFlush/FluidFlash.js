import React, { useState, useEffect } from "react";
import { GetNearbyPlaces } from "../../../API/Api";
import NearbyList from "../../List/List_nearby";
import { Titleholder, InsightsContainer, Content } from "./FluidFlushStyles";
import InsightsFluidFlash from "../../InsightsSections/InsightsFluidFlash";
import Footer from "../../Footer";

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
      <Content>
        <Titleholder>Nearby Places</Titleholder>
        <NearbyList result={result} />
        <Titleholder>Insights</Titleholder>
        <InsightsContainer>
          <InsightsFluidFlash />
        </InsightsContainer>
        {/* <Footer /> */}
      </Content>
    </>
  );
}
