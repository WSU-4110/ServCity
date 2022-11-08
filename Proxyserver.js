require("dotenv").config();
var express = require("express");
var axios = require("axios");
var cors = require("cors");
var app = express();
app.use(cors());
app.use(express.json());

let coordinates;

class Server{
  constructor(service) {
    this.service = service;
  }
  Get(){
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
})
// get the location of the user
app.get("/getlocation", (req, res) => {
  res.status(200).send(coordinates);
});
}
Post(){
  // post users current location
app.post("/postlocation", (req, res) => {
  const coors = req.body;
  coordinates = coors;
  res.status(201).send("Location posted");
});
}
}
 
class Places{
  constructor(services,coordinates){
    this.services = services;
    this.coordinates = coordinates;

  }
  Postuserslocation(){
    Postuserslocation = async (coordinates) => {
      try {
        const res = await axios.post("http://localhost:4000/postlocation", {
          coordinates,
        });
        console.log(res.data);
      } catch (error) {
        console.log(error.response);
      }
    };

  }
NearbyTirePlaces = async (service) => {
  if (service === "Tires") {
    let results_tires = [];
    let Api_result_3;
    await axios
      .get("http://localhost:4000/tires")
      .then((res) => {
        Api_result_3 = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
    for (const key of Object.keys(Api_result_3)) {
      if (key > 0) {
        results_tires.push({
          name: Api_result_3[key].name,
          formatted_address: Api_result_3[key].formatted_address,
          rating: Api_result_3[key].rating,
          review_count: Api_result_3[key].review_count,
        });
      }
    }

    return results_tires;
  }

};
NearbyTireAlignmentPlaces = async (service) => {
  if (service === "Alignment") {
    let results_tires = [];
    let Api_result_3;
    await axios
      .get("http://localhost:4000/tires")
      .then((res) => {
        Api_result_3 = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
    for (const key of Object.keys(Api_result_3)) {
      if (key > 0) {
        results_tires.push({
          name: Api_result_3[key].name,
          formatted_address: Api_result_3[key].formatted_address,
          rating: Api_result_3[key].rating,
          review_count: Api_result_3[key].review_count,
        });
      }
    }

    return results_tires;
  }
};
RecommendedTirePlaces = async (service) =>{
  if (service === "Tires" ) {
    let results_tires;
    await axios
      .get("http://localhost:4000/tires")
      .then((res) => {
        results_tires = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
    return results_tires[0];
  }


};
RecommendedTireAlignmenPlaces = async (service) =>{
  if (service === "Alignment") {
    let results_tires;
    await axios
      .get("http://localhost:4000/tires")
      .then((res) => {
        results_tires = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
    return results_tires[0];
  }

};

}


// Tire and Tire alignment classes as listed in the UML diagram are displaying this pass through information into the component which is displayed on respective pages