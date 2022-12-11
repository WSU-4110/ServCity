import React from 'react'
import "antd/dist/antd.css";
import InsightsAlignment from './InsightsSections/InsightsAlignment';
import InsightsOilChange from './InsightsSections/InsightsOilChange'
import InsightsTireRotation from './InsightsSections/InsightsTireRotation';

import Player from './DoItYourself/DoItYourself';



export default function App() {
  
  return (
    <>
    {/*Calling the Alignment Insights Component*/}
    <div style={{ alignItems: "center", display: 'block', width: 700, padding: 30 }}>
      <h2>Alignment Insights</h2>
      <InsightsAlignment/>
    </div>

    {/*Calling the Oil Change Insights Component*/}
    <div style={{ alignItems: "center", display: 'block', width: 700, padding: 30 }}>
      <h2>Oil Change Insights</h2>
      <InsightsOilChange/>
    </div>

    {/*Calling the Tire Rotation Insights Component*/}
    <div style={{ alignItems: "center", display: 'block', width: 700, padding: 30 }}>
      <h2>Tire Rotaiton Insights</h2>
      <InsightsTireRotation/>
    </div>
    </>
  );
}
