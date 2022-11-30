import React from "react";
import Tires from "../index";
import { render } from "@testing-library/react";

it("Tires page renders correctly", () => {
  const div = document.createElement("div");
  render(<Tires></Tires>, div);
});
