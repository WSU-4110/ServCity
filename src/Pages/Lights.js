import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import {
  Front_Light_DRL_Signal,
  Front_Light_Low_High,
  Rear_Light_Tail,
  Rear_Light_Signal_Break,
} from "../Database/firebase";

import Table from "./Table";




export default function Lights() {
  // results
  const [results, SetResults] = useState([]);
  const [results2, SetResults2] = useState([]);
  const [showTable, SetshowTable] = useState(false);
  // toggling table
  const HandleTable = (e) => {
    SetshowTable(!showTable);
    console.log(showTable);
  };

  // Car Info
  const [make, SetMake] = useState("");
  const [model, SetModel] = useState("");
  const [year, Setyear] = useState("");
  const HandleVehicleMake = (event) => {
    SetMake(event.target.value);
  };

  const HandleVehicleModel = (event) => {
    SetModel(event.target.value);
  };
  const HandleVehicleYear = (event) => {
    Setyear(event.target.value);
  };

  // Light location
  const [lightlocation, Setlightlocation] = useState("");
  const Handlelightlocation = (event) => {
    Setlightlocation(event.target.value);
  };

  //...................................................
  // Front
  //...................................................
  const [lightModelFront, SetlightmodelFront] = useState("");
  const [lightTypeFront, SetlightTypeFront] = useState("");
  const HandlelightModelFront = (event) => {
    SetlightmodelFront(event.target.value);
  };
  const HandlelightypeFront = (event) => {
    SetlightTypeFront(event.target.value);
  };
  // DRL, SIGNAL
  const PostLightsFrontSubmit1 = () => {
    Front_Light_DRL_Signal(
      make,
      model,
      year,
      lightlocation,
      lightModelFront
    ).then((results) => {
      SetResults(results);
    });
  };

  // HIGHBEAM, LOWBEAM
  const PostLightsFrontSubmit2 = () => {
    Front_Light_Low_High(
      make,
      model,
      year,
      lightlocation,
      lightModelFront,
      lightTypeFront
    ).then((results) => {
      SetResults(results);
    });
  };
  const HandleFrontSubmit1 = () => {
    PostLightsFrontSubmit1(make, model, year, lightlocation, lightModelFront);
  };
  const HandleFrontSubmit2 = () => {
    PostLightsFrontSubmit2(
      make,
      model,
      year,
      lightlocation,
      lightModelFront,
      lightTypeFront
    );
  };

  //...................................................
  // Rear
  //...................................................

  const [lightModelRear, SetlightmodelRear] = useState("");
  const [lightTypeRear, SetlightTypeRear] = useState("");
  const HandlelightModelRear = (event) => {
    SetlightmodelRear(event.target.value);
  };
  const HandlelightypeRear = (event) => {
    SetlightTypeRear(event.target.value);
  };
  // SIGNAL, BREAK
  const PostLightsRearSubmit1 = () => {
    Rear_Light_Signal_Break(
      make,
      model,
      year,
      lightlocation,
      lightModelRear
    ).then((results) => {
      SetResults(results);
    });
  };

  // Tail
  const PostLightsRearSubmit2 = () => {
    Rear_Light_Tail(
      make,
      model,
      year,
      lightlocation,
      lightModelRear,
      lightTypeRear
    ).then((results) => {
      SetResults(results);
    });
  };
  const HandleRearSubmit1 = () => {
    PostLightsRearSubmit1(make, model, year, lightlocation, lightModelRear);
  };
  const HandleRearSubmit2 = () => {
    PostLightsRearSubmit2(
      make,
      model,
      year,
      lightlocation,
      lightModelRear,
      lightTypeRear
    );
  };
  return (
    <>
    <main>
    <div class="header"> <h1> AtHome Maintenance </h1> </div>
    <h2> Light Replacement </h2>
      <div className="AtHomeFormContainer">
        <h1>Answer the following Questions</h1>
        <div className="AtHomeFormContent">
          <h2>Vehicle information</h2>
          <Stack
            spacing={29}
            justifyContent="center"
            alignItems="center"
            direction="row"
            m={2}
          >
            <InputLabel>Make</InputLabel> <InputLabel>Model</InputLabel>{" "}
            <InputLabel>Year</InputLabel>{" "}
          </Stack>
          <Stack
            spacing={10}
            justifyContent="center"
            alignItems="center"
            direction="row"
            m={2}
          >
            <Select
              value={make}
              onChange={HandleVehicleMake}
              sx={{ width: 200 }}
            >
              <MenuItem value="None">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Ford">Ford</MenuItem>
            </Select>
            <Select
              value={model}
              onChange={HandleVehicleModel}
              sx={{ width: 200 }}
            >
              <MenuItem value="None">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Focus">Focus</MenuItem>
            </Select>{" "}
            <Select
              value={year}
              onChange={HandleVehicleYear}
              sx={{ width: 200 }}
            >
              <MenuItem value="None">
                <em>None</em>
              </MenuItem>
              <MenuItem value="2015">2015</MenuItem>
            </Select>
          </Stack>
          <h2>Select Location of Lights</h2>
          <Stack
            spacing={10}
            justifyContent="center"
            alignItems="center"
            direction="row"
            m={2}
          >
            <Select
              value={lightlocation}
              onChange={Handlelightlocation}
              sx={{ width: 200 }}
            >
              <MenuItem value="None">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Front">Front</MenuItem>
              <MenuItem value="Rear">Rear</MenuItem>
            </Select>
          </Stack>
          {/* If Front is selected */}
          {lightlocation === "Front" && (
            <>
              <h2>Select Light Model</h2>
              <Stack
                spacing={10}
                justifyContent="center"
                alignItems="center"
                direction="row"
                m={2}
              >
                <Select
                  value={lightModelFront}
                  onChange={HandlelightModelFront}
                  sx={{ width: 200 }}
                >
                  <MenuItem value="None">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="HighBeam">High Beam</MenuItem>
                  <MenuItem value="LowBeam">Low Beam</MenuItem>
                  <MenuItem value="DRL">DRL </MenuItem>
                  <MenuItem value="Signal">Signal </MenuItem>
                </Select>
              </Stack>
              {(lightModelFront === "DRL" || lightModelFront === "Signal") && (
                <>
                  <Button
                    variant="contained"
                    sx={{ textDecoration: "none", m: 2 }}
                    onClick={HandleFrontSubmit1}
                  >
                    Submit
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ textDecoration: "none" }}
                    onClick={HandleTable}
                  >
                    See Results
                  </Button>
                </>
              )}
              {/* If Highbeam and Lowbeam is selected after Front */}
              {(lightModelFront === "HighBeam" ||
                lightModelFront === "LowBeam") && (
                <>
                  <h2>Select Light Type</h2>
                  <Stack
                    spacing={10}
                    justifyContent="center"
                    alignItems="center"
                    direction="row"
                    m={2}
                  >
                    <Select
                      value={lightTypeFront}
                      onChange={HandlelightypeFront}
                      sx={{ width: 200 }}
                    >
                      <MenuItem value="None">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="Halogen">Halogen </MenuItem>
                      <MenuItem value="LED">LED</MenuItem>
                      <MenuItem value="Xenon">Xenon</MenuItem>
                    </Select>
                  </Stack>
                  {(lightTypeFront === "Halogen" ||
                    lightTypeFront === "LED" ||
                    lightTypeFront === "Xenon") && (
                    <>
                      <Button
                        variant="contained"
                        sx={{ textDecoration: "none", m: 2 }}
                        onClick={HandleFrontSubmit2}
                      >
                        Submit
                      </Button>
                      <Button
                        variant="contained"
                        sx={{ textDecoration: "none" }}
                        onClick={HandleTable}
                      >
                        See Results
                      </Button>
                    </>
                  )}
                </>
              )}
            </>
          )}
          {/* If Rear is selected */}
          {lightlocation === "Rear" && (
            <>
              <h2>Select Light Model</h2>
              <Stack
                spacing={10}
                justifyContent="center"
                alignItems="center"
                direction="row"
                m={2}
              >
                <Select
                  value={lightModelRear}
                  onChange={HandlelightModelRear}
                  sx={{ width: 200 }}
                >
                  <MenuItem value="None">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Tail">Tail</MenuItem>
                  <MenuItem value="Signal">Signal</MenuItem>
                  <MenuItem value="Brake">Brake </MenuItem>
                </Select>
              </Stack>
              {(lightModelRear === "Signal" || lightModelRear === "Brake") && (
                <>
                  <Button
                    variant="contained"
                    sx={{ textDecoration: "none", m: 2 }}
                    onClick={HandleRearSubmit1}
                  >
                    Submit
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ textDecoration: "none" }}
                    onClick={HandleTable}
                  >
                    See Results
                  </Button>
                </>
              )}
              {lightModelRear === "Tail" && (
                <>
                  <h2>Select Light Type</h2>
                  <Stack
                    spacing={10}
                    justifyContent="center"
                    alignItems="center"
                    direction="row"
                    m={2}
                  >
                    <Select
                      value={lightTypeRear}
                      onChange={HandlelightypeRear}
                      sx={{ width: 200 }}
                    >
                      <MenuItem value="None">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="Halogen">Halogen </MenuItem>
                      <MenuItem value="LED">LED</MenuItem>
                      <MenuItem value="HID">HID</MenuItem>
                    </Select>
                  </Stack>
                  {(lightTypeRear === "Halogen" ||
                    lightTypeRear === "LED" ||
                    lightTypeRear === "HID") && (
                    <>
                      <Button
                        variant="contained"
                        sx={{ textDecoration: "none", m: 2 }}
                        onClick={HandleRearSubmit2}
                      >
                        Submit
                      </Button>
                      <Button
                        variant="contained"
                        sx={{ textDecoration: "none" }}
                        onClick={HandleTable}
                      >
                        See Results
                      </Button>
                    </>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>
      {showTable == true && <Table results={results} />}
      <div class="footer"></div>
    </main>
      </>
  );
}
