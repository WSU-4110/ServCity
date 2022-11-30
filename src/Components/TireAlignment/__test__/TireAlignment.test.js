import React from "react";
import TireAlignment from "../index";
import { render } from "@testing-library/react";

it("Tire Aligment page renders correctly", () => {
  const div = document.createElement("div");
  render(<TireAlignment></TireAlignment>, div);
});
