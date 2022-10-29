import { Home } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { Postuserslocation } from "../../API/Api";
function HomePage() {
  console.log("render Home.js");
  const [coordinates, setCoordinates] = useState({});
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);
  if (Object.keys(coordinates).length === 0) {
    console.log("Empty location object");
    console.log(coordinates);
  } else {
    console.log("not empty");
    console.log(coordinates);
    Postuserslocation(coordinates);
  }

  return (
    <div>
      <h1> Welcome to ServiCity</h1>
    </div>
  );
}

export default HomePage;
