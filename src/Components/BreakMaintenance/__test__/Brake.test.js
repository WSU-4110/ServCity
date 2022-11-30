import React from "react";
import BrakeMaintenance from "../index";
import { render } from "@testing-library/react";

it("Brake maintenance page renders correctly", () => {
  const div = document.createElement("div");
  render(<BrakeMaintenance></BrakeMaintenance>, div);
});
