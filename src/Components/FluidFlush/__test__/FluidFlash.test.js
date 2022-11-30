import React from "react";
import { ReactDOM } from "react-dom";
import Fluidflush from "../index";
import { render, screen } from "@testing-library/react";

it("Fluid Flash page renders correctly", () => {
  const div = document.createElement("div");
  render(<Fluidflush></Fluidflush>, div);
});
