// Andrea Cuc Unit Test Assignment

import "@testing-library/jest-dom";
import MockAtHome from "../Mock/MockAtHome";
import { render, cleanup, screen } from "@testing-library/react";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";


//Unit Test 1: Button
    test("should render a button for navigating main page", () => {
    render(<Button />);
    });

//Unit Test 2: Handels Table
    test("displays table component to console", () => {
        const HandleTable = (e) => {
            SetshowTable(!showTable);
            console.log(showTable);
        };
    });

//Unit Test 3: Fetching Vehicle Make
    test("fetching vehicle make content from database", () => {
        const HandleVehicleMake = (event) => {
            SetMake(event.target.value);
        };
    });

//Unit Test 4: MenuItem
    test("renders a Menu Item inside of the form component", () => {
        render(<MenuItem value="2015">2015</MenuItem>);
    });

    test("finds and displays the car image to consol", () => {
        render(<img src="Car.png" />);
    });

//Unit Test 6: In-take of form content to results
    test("store and initialize results of form contents", () => {
    const PostFilterSubmit = () => {
        FIlter_Parts(make, model, year, FilterTypes).then((results) => {
          SetResults(results);
        });
      };
});

//Unit Test 7: Processing Fliter type content
    test("read and fetch filter type", () => {
        const HandleFilterTypes = (event) => {
            SetFiterTypes(event.target.value);
        };
    });
