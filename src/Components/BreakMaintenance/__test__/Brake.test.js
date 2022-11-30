import React from "react";
import { ReactDOM } from "react-dom";
import BrakeMaintenance from "../index";
import { render, screen } from "@testing-library/react";

it("Brake maintenance page renders correctly", () => {
  const div = document.createElement("div");
  render(<BrakeMaintenance></BrakeMaintenance>, div);
});
