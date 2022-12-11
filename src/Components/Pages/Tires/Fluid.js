//
//AtHome Fluid

import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Table from "../../AtHome/Pages/Table";
import { Fluid_Change } from "../../AtHome/Database/firebase";






export default function Fluid() {
  const [make, SetMake] = useState("");
  const [model, SetModel] = useState("");
  const [year, Setyear] = useState("");
  const [FluidTypes, SetFluidTypes] = useState("");
  // results
  const [results, SetResults] = useState([]);
  const [showTable, SetshowTable] = useState(false);
  // toggling table
  const HandleTable = (e) => {
    SetshowTable(!showTable);
    console.log(showTable);
  };

  const HandleVehicleMake = (event) => {
    SetMake(event.target.value);
  };
  const HandleVehicleModel = (event) => {
    SetModel(event.target.value);
  };
  const HandleVehicleYear = (event) => {
    Setyear(event.target.value);
  };
  const HandleFluidTypes = (event) => {
    SetFluidTypes(event.target.value);
  };
  const HandleSubmit = () => {
    PostFluidSubmit();
  };
  const PostFluidSubmit = () => {
    Fluid_Change(make, model, year, FluidTypes).then((results) => {
      SetResults(results);
    });
  };
  return (
    <>
    <main>
    <div class="header"> <h1> AtHome Maintenance </h1> </div>
    <h2> Fluid Flush </h2>
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
          <h2>Which Fluid are you looking to change?</h2>
          <Stack
            spacing={10}
            justifyContent="center"
            alignItems="center"
            direction="row"
            m={2}
          >
            <Select
              value={FluidTypes}
              onChange={HandleFluidTypes}
              sx={{ width: 200 }}
            >
              <MenuItem value="None">
                <em>None</em>
              </MenuItem>
              <MenuItem value="PowerSteeringFluid">
                Power Steering Fluid
              </MenuItem>
              <MenuItem value="WindshieldWiperFluid">
                Windshield Wiper Fluid
              </MenuItem>
            </Select>
          </Stack>
          {(FluidTypes === "PowerSteeringFluid" ||
            FluidTypes === "WindshieldWiperFluid") && (
            <>
              <Button
                variant="contained"
                sx={{ textDecoration: "none", m: 2 }}
                onClick={HandleSubmit}
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
        </div>
      </div>
      {showTable == true && <Table results={results} />}
      <div class="footer"></div>
    </main>
      </>
  );
}

