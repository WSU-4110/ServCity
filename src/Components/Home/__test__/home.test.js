import React from "react";
import { ReactDOM } from "react-dom";
import Home from "../index";
import { render, screen } from "@testing-library/react";

it("Home page renders correctly", () => {
  const div = document.createElement("div");
  render(<Home></Home>, div);
});
