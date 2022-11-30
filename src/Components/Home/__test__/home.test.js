import React from "react";
import Home from "../index";
import { render } from "@testing-library/react";

it("Home page renders correctly", () => {
  const div = document.createElement("div");
  render(<Home></Home>, div);
});
