// import { keys } from "@mui/system";
// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { ServerStyleSheet } from "styled-components";
// import Places from "../../Proxyserver";

function DisplayNearbyAlignment(service) {
  if (service.equals("Alignment")) {
    message = "Displaying Nearby Alignment service";
  }
  return message;
}
// export function DisplayRecommendedAlignment(service) {
//   if (service === "Alignment") {
//     message = "Displaying Recommended Alignment service";
//   }
//   return message;
// }
module.exports = DisplayNearbyAlignment;
