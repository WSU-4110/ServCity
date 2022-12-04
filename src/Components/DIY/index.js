import React from "react";
import InsightsAlignment from "../../InsightsSections/InsightsAlignment";
import InsightsOilChange from "../../InsightsSections/InsightsOilChange";
import InsightsTireRotation from "../../InsightsSections/InsightsTireRotation";

function DIYpage() {
  return (
    <>
      <div
        style={{
          alignItems: "center",
          display: "block",
          width: 700,
          padding: 30,
        }}
      >
        <h2>Alignment Insights</h2>
        <InsightsAlignment />
      </div>
    </>
  );
}

export default DIYpage;
