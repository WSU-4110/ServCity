import React from "react";
import Fluidflush from "../index";
import { render } from "@testing-library/react";

it("Fluid Flash page renders correctly", () => {
  const div = document.createElement("div");
  render(<Fluidflush></Fluidflush>, div);
});
