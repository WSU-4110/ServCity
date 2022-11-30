import React from "react";
import Oiling from "../index";
import { render } from "@testing-library/react";

it("Oil Change page renders correctly", () => {
  const div = document.createElement("div");
  render(<Oiling></Oiling>, div);
});
