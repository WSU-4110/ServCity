import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "../css/AtHomeForm.css";
import { Link } from "react-router-dom";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import car from "../Gallery/Car.png";

import "../css/AtHomeStyles.css";

export default function AtHome() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
    <main>
      <div className="AtHomeContent">
      <div class="header"> <h1> AtHome Maintenance </h1> </div>
        <h2>
          Like a recipe to fix your car, we are a tool to provide quick and easy<br></br>
          access to the information you need - the parts you need, where they <br></br>
          can be found, and useful installation videos to help you get started
          AtHome.
        </h2>
      </div>
      <div className="AtHomePagesContainer">
        <Box sx={{ minWidth: 120 }}>
          <Stack
            spacing={2}
            justifyContent="center"
            alignItems="center"
            direction="row"
            mt={15}
          >
            <Button
              sx={{ textDecoration: "none" }}
              variant="contained"
              as={Link}
              to={"/Lights"}
            >
              Lights Replacement
            </Button>

            <Button
              variant="contained"
              sx={{ textDecoration: "none" }}
              as={Link}
              to={"/Fluid"}
            >
              Fluid Flush
            </Button>
            <Button
              variant="contained"
              sx={{ textDecoration: "none" }}
              as={Link}
              to={"/Oil"}
            >
              Oil Change
            </Button>
            <Button
              variant="contained"
              sx={{ textDecoration: "none" }}
              as={Link}
              to={"/Brakes"}
            >
              Brake Pad Replacement
            </Button>
            <Button
              variant="contained"
              sx={{ textDecoration: "none" }}
              as={Link}
              to={"/Filter"}
            >
              Filter Change
            </Button>
          </Stack>
        </Box>
      </div>
      <br></br>
      <div class="footer-main">
        <img src={car}></img>
      </div>
      </main>
    </>
  );
}
