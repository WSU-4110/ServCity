import axios from "axios";

// Google  Places API Search
const GoogleAPIKey = "AIzaSyAF9i1A12NtujwP1WXmYgZd7d-lbE20iY8";
export const GetGooglePlacesData = async () => {
  var axios = require("axios");
  var config = {
    method: "get",
    url: "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&key=YOUR_API_KEY",
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
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
      Authorization: "fsq3YPruQ40Fu5HIR4q7vFBp68SKhMTntAU283mB1HAgp18=",
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
