require("dotenv").config();
var express = require("express");
var axios = require("axios");
var cors = require("cors");
var app = express();
app.use(cors());
app.use(express.json());

let coordinates;

// post users current location
app.post("/postlocation", (req, res) => {
  const coors = req.body;
  coordinates = coors;
  res.status(201).send("Location posted");
});
// get the location of the user
app.get("/getlocation", (req, res) => {
  res.status(200).send(coordinates);
});

// Calling yelp fusion api from the server side for oilchange
app.get("/oilchange", async (req, res) => {
  var yelp_results;
  var foursquare_results;
  var top_places = [];
  var recommended = [];
  var results = [];

  // getting Yelps data for oilchange
  var config_1 = {
    method: "get",
    url: `https://api.yelp.com/v3/businesses/search?term=oilchange&latitude=${coordinates.coordinates.lat}&longitude=${coordinates.coordinates.lng}&limit=6&sort_by=rating`,
    headers: {
      Authorization: "Bearer " + process.env.REACT_APP_YelpAPIKEY,
    },
  };
  await axios(config_1)
    .then((response) => {
      yelp_results = response.data;
    })
    .catch((err) => err);
  // getting foursquares data for oilchange
  var config_2 = {
    method: "get",
    url: `https://api.foursquare.com/v3/places/search?query=oilchange&ll=${coordinates.coordinates.lat}%2C${coordinates.coordinates.lng}&categories=11013&fields=name%2Crating%2Cstats%2Clocation&sort=RATING&limit=4`,
    headers: {
      Authorization: process.env.REACT_APP_FOURSQUAREPLACESAPIKEY,
    },
  };
  await axios(config_2)
    .then((response) => {
      foursquare_results = response.data;
    })
    .catch((err) => err);

  top_places.push(yelp_results.businesses[0]);
  top_places.push(foursquare_results.results[0]);
  F_rating_formatted = top_places[1].rating / 2;

  // Comparing the ratings of the places returned by both of the API's
  if (F_rating_formatted >= top_places[0].rating) {
    recommended.pop();
    recommended.push(foursquare_results.results[0]);
    results.push([
      {
        name: foursquare_results.results[1].name,
        formatted_address:
          foursquare_results.results[1].location.formatted_address,
        rating: foursquare_results.results[1].rating / 2,
        review_count: foursquare_results.results[1].stats.total_ratings,
      },
    ]);
    // storing nearby places with the yelp api results
    for (const key of Object.keys(yelp_results.businesses)) {
      results.push({
        name: yelp_results.businesses[key].name,
        formatted_address: `${yelp_results.businesses[key].location.display_address[0]} ${yelp_results.businesses[key].location.display_address[1]}`,
        rating: yelp_results.businesses[key].rating,
        rating_count: yelp_results.businesses[key].review_count,
        distance: yelp_results.businesses[key].distance,
      });
    }
    // storing nearby places with Foursquare's api results
    for (const key of Object.keys(foursquare_results.results)) {
      if (key > 0) {
        results.push({
          name: foursquare_results.results[key].name,
          formatted_address:
            foursquare_results.results[key].location.formatted_address,
          rating: foursquare_results.results[key].rating / 2,
          review_count: foursquare_results.results[key].stats.total_ratings,
        });
      }
    }
  } else {
    recommended.pop();
    recommended.push(yelp_results.businesses[0]);
    // appending the recommended place in the results array
    results.push([
      {
        name: yelp_results.businesses[0].name,
        formatted_address: `${yelp_results.businesses[0].location.display_address[0]} ${yelp_results.businesses[0].location.display_address[1]}`,
        rating: yelp_results.businesses[0].rating,
        rating_count: yelp_results.businesses[0].review_count,
        distance: yelp_results.businesses[0].distance,
      },
    ]);
    // storing nearby places with Foursquare's api results
    for (const key of Object.keys(foursquare_results.results)) {
      results.push({
        name: foursquare_results.results[key].name,
        formatted_address:
          foursquare_results.results[key].location.formatted_address,
        rating: foursquare_results.results[key].rating / 2,
        review_count: foursquare_results.results[key].stats.total_ratings,
      });
    }
    // storing nearby places with the yelp api results
    for (const key of Object.keys(yelp_results.businesses)) {
      if (key > 0) {
        results.push({
          name: yelp_results.businesses[key].name,
          formatted_address: `${yelp_results.businesses[key].location.display_address[0]} ${yelp_results.businesses[key].location.display_address[1]}`,
          rating: yelp_results.businesses[key].rating,
          rating_count: yelp_results.businesses[key].review_count,
          distance: yelp_results.businesses[key].distance,
        });
      }
    }
  }
  res.json(results);
});

// Calling yelp fusion api from the server side for tires
app.get("/tires", async (req, res) => {
  var yelp_results;
  var foursquare_results;
  var top_places = [];
  var recommended = [];
  var results = [];

  // getting Yelps data for tires
  var config_1 = {
    method: "get",
    url: `https://api.yelp.com/v3/businesses/search?term=tires&latitude=${coordinates.coordinates.lat}&longitude=${coordinates.coordinates.lng}&limit=4&sort_by=rating`,
    headers: {
      Authorization: "Bearer " + process.env.REACT_APP_YelpAPIKEY,
    },
  };
  await axios(config_1)
    .then((response) => {
      yelp_results = response.data;
    })
    .catch((err) => err);
  // getting foursquares data for tires
  var config_2 = {
    method: "get",
    url: `https://api.foursquare.com/v3/places/search?query=tires&ll=${coordinates.coordinates.lat}%2C${coordinates.coordinates.lng}&categories=11015&fields=name%2Crating%2Cstats%2Clocation&sort=RATING&limit=7`,
    headers: {
      Authorization: process.env.REACT_APP_FOURSQUAREPLACESAPIKEY,
    },
  };
  await axios(config_2)
    .then((response) => {
      foursquare_results = response.data;
    })
    .catch((err) => err);

  top_places.push(yelp_results.businesses[0]);
  top_places.push(foursquare_results.results[0]);
  F_rating_formatted = top_places[1].rating / 2;

  // Comparing the ratings of the places returned by both of the API's
  if (F_rating_formatted >= top_places[0].rating) {
    recommended.pop();
    recommended.push(foursquare_results.results[0]);
    results.push([
      {
        name: foursquare_results.results[1].name,
        formatted_address:
          foursquare_results.results[1].location.formatted_address,
        rating: foursquare_results.results[1].rating / 2,
        review_count: foursquare_results.results[1].stats.total_ratings,
      },
    ]);
    // storing nearby places with Foursquare's api results
    for (const key of Object.keys(foursquare_results.results)) {
      if (key > 0) {
        results.push({
          name: foursquare_results.results[key].name,
          formatted_address:
            foursquare_results.results[key].location.formatted_address,
          rating: foursquare_results.results[key].rating / 2,
          review_count: foursquare_results.results[key].stats.total_ratings,
        });
      }
    }
  } else {
    recommended.pop();
    recommended.push(yelp_results.businesses[0]);
    // appending the recommended place in the results array
    results.push([
      {
        name: yelp_results.businesses[0].name,
        formatted_address: `${yelp_results.businesses[0].location.display_address[0]} ${yelp_results.businesses[0].location.display_address[1]}`,
        rating: yelp_results.businesses[0].rating,
        rating_count: yelp_results.businesses[0].review_count,
        distance: yelp_results.businesses[0].distance,
      },
    ]);
    // storing nearby places with Foursquare's api results
    for (const key of Object.keys(foursquare_results.results)) {
      if (key > 0) {
        results.push({
          name: foursquare_results.results[key].name,
          formatted_address:
            foursquare_results.results[key].location.formatted_address,
          rating: foursquare_results.results[key].rating / 2,
          review_count: foursquare_results.results[key].stats.total_ratings,
        });
      }
    }
  }
  res.json(results);
});

// Calling Foursquares api from the server side for Brakes

// calling the Google places api from the server side
app.listen(4000, function () {
  console.log("Server started on port 4000");
});
