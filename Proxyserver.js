require("dotenv").config();
var express = require("express");
var axios = require("axios");
var cors = require("cors");
var app = express();
app.use(cors());
app.use(express.json());

let coordinates;

// const YelpApikey = "Bearer " + process.env.REACT_APP_YelpAPIKEY;

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

// Calling yelp fusion api from the server side
app.get("/yelpplaces", async (req, res) => {
  // retrieve the users location by calling the function above
  var places = [];
  var config = {
    method: "get",
    url: `https://api.yelp.com/v3/businesses/search?term=oilchange&latitude=${coordinates.coordinates.lat}&longitude=${coordinates.coordinates.lng}&limit=10`,
    headers: {
      Authorization: "Bearer " + process.env.REACT_APP_YelpAPIKEY,
    },
  };

  const placedata = await axios(config)
    .then((respose) => respose.data)
    .catch((err) => err);
  places.push(placedata);

  res.json(placedata);
});

// calling the Google places api from the server side

app.listen(4000, function () {
  console.log("Server started on port 4000");
});
