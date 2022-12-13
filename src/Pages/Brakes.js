import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Table from "./Table";
import { Brake_Parts } from "../Database/firebase";



export default function Brakes() {
  const [make, SetMake] = useState("");
  const [model, SetModel] = useState("");
  const [year, Setyear] = useState("");
  const [BreakTypes, SetBreakTypes] = useState("");
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
  const HandleBreakTypes = (event) => {
    SetBreakTypes(event.target.value);
  };
  const HandleSubmit = () => {
    PostBreakSubmit();
  };
  const PostBreakSubmit = () => {
    Brake_Parts(make, model, year, BreakTypes).then((results) => {
      SetResults(results);
    });
  };


  return (
    <>
    <main>
    <div class="header"> <h1> AtHome Maintenance </h1> </div>
    <h2> Brake Replacement </h2>

    <div class="group">
      <a href="/">
        <div class="brake-container">
          <div class="inner">
            <h1> Organic </h1>

            <table>
              <tr>
                <td>Price:</td>
                <td>$</td>
              </tr>
              <tr>
                <td>Performance:</td>
                <td>★</td>
              </tr>
              <tr>
                <td>Wear & Tear:</td>
                <td>★★</td>
              </tr>
              <tr>
              <td>Noise:</td>
              <td>★★</td>
              </tr>
            </table>
          </div>
        </div>
        </a>

        <a href="/">
        <div class="brake-container">
          <div class="inner">
            <h1> Ceramic </h1>
            <p>
            <table>
              <tr>
                <td>Price:</td>
                <td>$$$</td>
              </tr>
              <tr>
                <td>Performance:</td>
                <td>★★★</td>
              </tr>
              <tr>
                <td>Wear & Tear:</td>
                <td>★★★</td>
              </tr>
              <tr>
              <td>Noise:</td>
              <td>★★★</td>
              </tr>
            </table>
          </p>
        </div>
        </div>
      </a>


      <a href="/">
      <div class="brake-container">
        <div class="inner">
          <h1> Semi Metallic </h1>

          <table>
            <tr>
              <td>Price:</td>
              <td>$$</td>
            </tr>
            <tr>
              <td>Performance:</td>
              <td>★★★</td>
            </tr>
            <tr>
              <td>Wear & Tear:</td>
              <td>★</td>
            </tr>
            <tr>
            <td>Noise:</td>
            <td>★</td>
            </tr>
          </table>
        </div>
      </div>
      </a>
    </div>

      <div className="AtHomeFormContainer-brakes">
        <h1>Answer the following Questions</h1>
        <div className="AtHomeFormContent-brakes">
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
          <h2>What Brake Pads do you plan on using?</h2>
          <Stack
            spacing={10}
            justifyContent="center"
            alignItems="center"
            direction="row"
            m={2}
          >
            <Select
              value={BreakTypes}
              onChange={HandleBreakTypes}
              sx={{ width: 200 }}
            >
              <MenuItem value="None">
                <em>None</em>
              </MenuItem>
              <MenuItem value="CeramicFront">CeramicFront</MenuItem>
              <MenuItem value="OrganicFront">Organic Front</MenuItem>
              <MenuItem value="SemiMetallicFront">Semi Metallic Front</MenuItem>
            </Select>
          </Stack>
          {(BreakTypes === "CeramicFront" ||
            BreakTypes === "OrganicFront" ||
            BreakTypes === "SemiMetallicFront") && (
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
