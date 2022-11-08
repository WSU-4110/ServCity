import { keys } from "@mui/system";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { ServerStyleSheet } from "styled-components";
import Places from "../../Proxyserver";

class Oilchange {
  constructor(nearbyplaces, recommendedplaces) {
    this.nearbyPlaces = nearbyplaces;
    this.recommendedPlaces = recommendedplaces;
  }

  displaynearbyplaces() {
    var places = Places.GetNearbyPlaces("Oilchange");
    return places;
  }
  displayrecommendedplaces() {
    var places = Places.GetRecommendedPlaces("Oilchange");
    return places;
  }
}

class FluidFlash {
  constructor(nearbyplaces, recommendedplaces) {
    this.nearbyPlaces = nearbyplaces;
    this.recommendedPlaces = recommendedplaces;
  }
  displaynearbyplaces() {
    var places = Places.GetNearbyPlaces("FulidFlash");
    return places;
  }
  displayrecommendedplaces() {
    var places = Places.GetRecommendedPlaces("FulidFlash");
    return places;
  }
}
