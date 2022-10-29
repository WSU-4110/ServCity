import React, { useState, useEffect } from "react";
import axios from "axios";
import Placelists from "../List/List";
import {
  GetFoursquarePlacesData,
  GetYelpPlacesData,
  Postuserslocation,
} from "../../API/Api";
import { Dropdown } from "./DropdownStyles";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

function AutomativeDropdown() {
  console.log("render Automative.js");

  const [results, setResults] = useState([]);
  const [service, setService] = useState("");
  // const [coordinates, setCoordinates] = useState({});

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(
  //     ({ coords: { latitude, longitude } }) => {
  //       setCoordinates({ lat: latitude, lng: longitude });
  //     }
  //   );
  //   if (Object.keys(coordinates).length === 0) {
  //     console.log("Empty location object");
  //     console.log(coordinates);
  //   } else {
  //     console.log("not empty");
  //     console.log(coordinates);
  //     Postuserslocation(coordinates);
  //   }
  // }, []);
  useEffect(() => {
    GetYelpPlacesData();
  }, []);

  const handleChange = (event) => {
    setService(event.target.value);
  };
  // useEffect(() => {
  //   if (service === "none") {
  //     setResults([]);
  //     console.log(service, coordinates.lat, coordinates.lng);
  //   } else if (service === "oilchange" || service === "tireservice") {
  //     GetFoursquarePlacesData(coordinates.lat, coordinates.lng, service).then(
  //       (results) => {
  //         setResults(results);
  //       }
  //     );
  //   }
  // }, [coordinates, service]);

  return (
    <>
      {/* Dropdown for the service */}
      <Dropdown>
        <TextField
          label="Select a Service"
          select
          value={service}
          onChange={handleChange}
          sx={{ minWidth: 500 }}
          InputLabelProps={{ className: "textfield_labels" }}
          InputProps={{ className: "textfield_inputs" }}
        >
          <MenuItem value={"none"}>
            <em>None</em>
          </MenuItem>
          <MenuItem value={"oilchange"}>Oil change</MenuItem>
          <MenuItem value={"tireservice"}>Tire Service</MenuItem>
        </TextField>
      </Dropdown>
      {/* List of the places nearby */}
      <Placelists results={results} />
    </>
  );
}

export default AutomativeDropdown;
