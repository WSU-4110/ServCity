// 
//Oil Change

import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Table from "./Table";
import { Oil_Change } from "../Database/firebase";




export default function Oil() {

  const [make, SetMake] = useState("");
  const [model, SetModel] = useState("");
  const [year, Setyear] = useState("");
  const [Oiltype, SetoilType] = useState("");
  
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
  const HandleOilType = (event) => {
    SetoilType(event.target.value);
  };
  const HandleSubmit = () => {
    PostOilSubmit();
  };
  const PostOilSubmit = () => {
    Oil_Change(make, model, year, Oiltype).then((results) => {
      SetResults(results);
    });
  };

  return (
    <>
    <main>
    <div class="header"> <h1> AtHome Maintenance </h1> </div>
    <h2> Oil Change</h2>

    <div class="group">
      <a href="/">
        <div class="oil-container">
          <div class="inner">
            <h1> FULLY SYNTHETIC </h1>
            <h3>	Life span of: </h3>
            <p>	7,500 to 15,000 miles	</p>

          </div>
        </div>
        </a>

        <a href="/">
        <div class="oil-container">
          <div class="inner">
            <h1> SEMI SYNTHETIC </h1>
            <h3>	Life span of: </h3>
            <p>	Around 6,000 miles	</p>
        </div>
        </div>
      </a>
        <a href="/">
        <div class="oil-container">
          <div class="inner">
            <h1> MINERAL OIL </h1>
            <h3>	Life span of: </h3>
            <p>	Around 3,000 miles	</p>
          </div>
        </div>
          </a>
    </div>

      <div className="AtHomeFormContainer-oil">
        <h1>Answer the following Questions</h1>
        <div className="AtHomeFormContent-oil">
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
              <MenuItem value="None"> <em>None</em> </MenuItem>
              <MenuItem value="Ford">Ford</MenuItem>
            </Select>
            <Select
              value={model}
              onChange={HandleVehicleModel}
              sx={{ width: 200 }}
            >
              <MenuItem value="None"> <em>None</em> </MenuItem>
              <MenuItem value="Focus">Focus</MenuItem>
            </Select>{" "}
            <Select
              value={year}
              onChange={HandleVehicleYear}
              sx={{ width: 200 }}
            >
              <MenuItem value="None"> <em>None</em> </MenuItem>
              <MenuItem value="2015">2015</MenuItem>
            </Select>
          </Stack>
          <h2>What type of oil do you plan on using?</h2>
          <Stack
            spacing={10}
            justifyContent="center"
            alignItems="center"
            direction="row"
            m={2}
          >
            <Select
              value={Oiltype}
              onChange={HandleOilType}
              sx={{ width: 200 }}
            >
              <MenuItem value="None"> <em>None</em> </MenuItem>
              <MenuItem value="FullySynthetic">Fully Synthetic</MenuItem>
              <MenuItem value="SemiSynthetic">Semi Synthetic</MenuItem>
              <MenuItem value="MineralOil">Mineral Oil</MenuItem>
            </Select>
          </Stack>
          {(Oiltype === "FullySynthetic" ||
            Oiltype === "SemiSynthetic" ||
            Oiltype === "MineralOil") && (
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
