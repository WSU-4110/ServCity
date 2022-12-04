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
  console.log(coordinates);
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
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_YelpAPIKEY}`,
    },
  };

  const Yelp_Api_response = await fetch(
    `https://api.yelp.com/v3/businesses/search?latitude=${coordinates.coordinates.lat}&longitude=${coordinates.coordinates.lng}&term=oilchange&limit=5&sort_by=rating`,
    options
  );

  yelp_results = await Yelp_Api_response.json();
  // getting foursquares data for oilchange
  var config_2 = {
    method: "get",
    url: `https://api.foursquare.com/v3/places/search?query=oilchange&ll=${coordinates.coordinates.lat}%2C${coordinates.coordinates.lng}&fields=name%2Crating%2Cstats%2Clocation%2Cgeocodes&sort=RATING&limit=3`,
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
  // Foursquare's places rating is higher than the yelp places rating
  if (F_rating_formatted >= top_places[0].rating) {
    recommended.pop();
    recommended.push(foursquare_results.results[0]);
    results.push({
      name: foursquare_results.results[1].name,
      formatted_address:
        foursquare_results.results[1].location.formatted_address,
      rating: foursquare_results.results[1].rating / 2,
      review_count: foursquare_results.results[1].stats.total_ratings,
      lat: foursquare_results.results[1].geocodes.main.latitude,
      lng: foursquare_results.results[1].geocodes.main.longitude,
      recommend: "yes",
    });
    // storing nearby places with the yelp api results
    for (const key of Object.keys(yelp_results.businesses)) {
      results.push({
        name: yelp_results.businesses[key].name,
        formatted_address: `${yelp_results.businesses[key].location.display_address[0]} ${yelp_results.businesses[key].location.display_address[1]}`,
        rating: yelp_results.businesses[key].rating,
        rating_count: yelp_results.businesses[key].review_count,
        distance: yelp_results.businesses[key].distance,
        recommend: "no",
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
          lat: foursquare_results.results[key].geocodes.main.latitude,
          lng: foursquare_results.results[key].geocodes.main.longitude,
          recommend: "no",
        });
      }
    }
    // Yelp's rating is higher than the foursquare's rating
  } else {
    recommended.pop();
    recommended.push(yelp_results.businesses[0]);
    // appending the recommended yelp place in the results array
    results.push({
      name: yelp_results.businesses[0].name,
      formatted_address: `${yelp_results.businesses[0].location.display_address[0]} ${yelp_results.businesses[0].location.display_address[1]}`,
      rating: yelp_results.businesses[0].rating,
      rating_count: yelp_results.businesses[0].review_count,
      distance: yelp_results.businesses[0].distance,
      lat: yelp_results.businesses[0].coordinates.latitude,
      lng: yelp_results.businesses[0].coordinates.longitude,
      recommend: "yes",
    });
    // storing nearby places with Foursquare's api results
    for (const key of Object.keys(foursquare_results.results)) {
      results.push({
        name: foursquare_results.results[key].name,
        formatted_address:
          foursquare_results.results[key].location.formatted_address,
        rating: foursquare_results.results[key].rating / 2,
        review_count: foursquare_results.results[key].stats.total_ratings,
        lat: foursquare_results.results[key].geocodes.main.latitude,
        lng: foursquare_results.results[key].geocodes.main.longitude,
        recommend: "no",
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
          lat: yelp_results.businesses[key].coordinates.latitude,
          lng: yelp_results.businesses[key].coordinates.longitude,
          recommend: "no",
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
  // getting Yelps data for oilchange
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_YelpAPIKEY}`,
    },
  };

  const Yelp_Api_response = await fetch(
    `https://api.yelp.com/v3/businesses/search?latitude=${coordinates.coordinates.lat}&longitude=${coordinates.coordinates.lng}&term=tires&limit=5&sort_by=rating`,
    options
  );

  yelp_results = await Yelp_Api_response.json();
  // getting foursquares data for tires
  var config_2 = {
    method: "get",
    url: `https://api.foursquare.com/v3/places/search?query=tires&ll=${coordinates.coordinates.lat}%2C${coordinates.coordinates.lng}&categories=11015&fields=name%2Crating%2Cstats%2Clocation%2Cgeocodes&sort=RATING&limit=5`,
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
    results.push({
      name: foursquare_results.results[1].name,
      formatted_address:
        foursquare_results.results[1].location.formatted_address,
      rating: foursquare_results.results[1].rating / 2,
      review_count: foursquare_results.results[1].stats.total_ratings,
      lat: foursquare_results.results[1].geocodes.main.latitude,
      lng: foursquare_results.results[1].geocodes.main.longitude,
      recommend: "yes",
    });
    // storing nearby places with Foursquare's api results
    for (const key of Object.keys(foursquare_results.results)) {
      if (key > 0) {
        results.push({
          name: foursquare_results.results[key].name,
          formatted_address:
            foursquare_results.results[key].location.formatted_address,
          rating: foursquare_results.results[key].rating / 2,
          review_count: foursquare_results.results[key].stats.total_ratings,
          lat: foursquare_results.results[key].geocodes.main.latitude,
          lng: foursquare_results.results[key].geocodes.main.longitude,
          recommend: "no",
        });
      }
    }
  } else {
    recommended.pop();
    recommended.push(yelp_results.businesses[0]);
    // appending the recommended place in the results array
    results.push({
      name: yelp_results.businesses[0].name,
      formatted_address: `${yelp_results.businesses[0].location.display_address[0]} ${yelp_results.businesses[0].location.display_address[1]}`,
      rating: yelp_results.businesses[0].rating,
      rating_count: yelp_results.businesses[0].review_count,
      distance: yelp_results.businesses[0].distance,
      lat: yelp_results.businesses[0].coordinates.latitude,
      lng: yelp_results.businesses[0].coordinates.longitude,
      recommend: "yes",
    });
    // storing nearby places with Foursquare's api results
    for (const key of Object.keys(foursquare_results.results)) {
      if (key > 0) {
        results.push({
          name: foursquare_results.results[key].name,
          formatted_address:
            foursquare_results.results[key].location.formatted_address,
          rating: foursquare_results.results[key].rating / 2,
          review_count: foursquare_results.results[key].stats.total_ratings,
          lat: foursquare_results.results[key].geocodes.main.latitude,
          lng: foursquare_results.results[key].geocodes.main.longitude,
          recommend: "no",
        });
      }
    }
  }
  res.json(results);
});

// Calling yelp fusion api from the server side for brakes
app.get("/brakes", async (req, res) => {
  var yelp_results;
  var results = [];

  // getting Yelps data for tires
  // getting Yelps data for oilchange
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_YelpAPIKEY}`,
    },
  };

  const Yelp_Api_response = await fetch(
    `https://api.yelp.com/v3/businesses/search?latitude=${coordinates.coordinates.lat}&longitude=${coordinates.coordinates.lng}&term=tires&limit=10&sort_by=rating`,
    options
  );

  yelp_results = await Yelp_Api_response.json();

  // Storing the first palce from the yelp api results array as the recommended place
  results.push({
    name: yelp_results.businesses[0].name,
    formatted_address: `${yelp_results.businesses[0].location.display_address[0]} ${yelp_results.businesses[0].location.display_address[1]}`,
    rating: yelp_results.businesses[0].rating,
    rating_count: yelp_results.businesses[0].review_count,
    distance: yelp_results.businesses[0].distance,
    lat: yelp_results.businesses[0].coordinates.latitude,
    lng: yelp_results.businesses[0].coordinates.longitude,
    recommend: "yes",
  });
  // Storing the rest of the place from the yelp api results array as nonrecommended place
  for (const key of Object.keys(yelp_results.businesses)) {
    if (key > 0) {
      results.push({
        name: yelp_results.businesses[key].name,
        formatted_address: `${yelp_results.businesses[key].location.display_address[0]} ${yelp_results.businesses[key].location.display_address[1]}`,
        rating: yelp_results.businesses[key].rating,
        rating_count: yelp_results.businesses[key].review_count,
        distance: yelp_results.businesses[key].distance,
        lat: yelp_results.businesses[key].coordinates.latitude,
        lng: yelp_results.businesses[key].coordinates.longitude,
        recommend: "no",
      });
    }
  }

  res.json(results);
});

app.listen(4000, function () {
  console.log("Server started on port 4000");
});
