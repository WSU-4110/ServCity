import axios from "axios";

// Google  Places API Search
export function GetGooglePlacesData() {}

// Foursquare Places API Search
export const GetFoursquarePlacesData = async (l1, l2, service) => {
  console.log(process.env.REACT_APP_GOOGLEPLACESAPIKEY);
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
