import React, { useState, useEffect } from "react";
import Placelists from "../List/List";
import { GetFoursquarePlacesData, GetGooglePlacesData } from "../../API/Api";
import { Dropdown } from "./DropdownStyles";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
function AutomativeDropdown() {
  const [results, setResults] = useState([]);
  const [service, setService] = useState("");
  const [coordinates, setCoordinates] = useState({});
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
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

  useEffect(() => {
    GetGooglePlacesData();
  }, [coordinates, service]);

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
