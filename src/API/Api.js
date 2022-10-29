import { keys } from "@mui/system";
import axios from "axios";
import React, { useState, useEffect } from "react";

export const Postuserslocation = async (coordinates) => {
  try {
    const res = await axios.post("http://localhost:4000/postlocation", {
      coordinates,
    });
    console.log(res.data);
  } catch (error) {
    console.log(error.response);
  }
};

// Google  Places API Search
export const GetYelpPlacesData = async () => {
  let results_api;
  let results_formatted = [];
  const res = await axios
    .get("http://localhost:4000/yelpplaces")
    .then((res) => {
      results_api = res.data;
    })
    .catch((error) => {
      console.log(error);
    });

  for (const key of Object.keys(results_api.businesses)) {
    results_formatted.push({
      name: results_api.businesses[key].name,
      formatted_address: `${results_api.businesses[key].location.display_address[0]} ${results_api.businesses[key].location.display_address[1]}`,
      rating: results_api.businesses[key].rating,
      review_count: results_api.businesses[key].review_count,
      distance: results_api.businesses[key].distance,
    });
  }
  console.log(results_formatted);
};

// Foursquare Places API Search
export const GetFoursquarePlacesData = async (l1, l2, service) => {
  let Service = service;
  let lat = l1;
  let lon = l2;
  let results = [];
  const options = {
    method: "GET",
    url: "https://api.foursquare.com/v3/places/search",
    headers: {
      accept: "application/json",
      Authorization: process.env.REACT_APP_FOURSQUAREPLACESAPIKEY,
    },
  };

  const response = await fetch(
    `https://api.foursquare.com/v3/places/search?query=${Service}&ll=${lat}%2C${lon}&fields=name%2Clocation&limit=5`,
    options
  );
  const data = await response.json();
  for (const key of Object.keys(data.results)) {
    results.push({
      name: data.results[key].name,
      formatted_address: data.results[key].location.formatted_address,
    });
  }
  return results;
};
