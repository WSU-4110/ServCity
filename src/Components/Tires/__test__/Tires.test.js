import React from "react";
import { ReactDOM } from "react-dom";
import Tires from "../index";
import { render, screen } from "@testing-library/react";

it("Tires page renders correctly", () => {
  const div = document.createElement("div");
  render(<Tires></Tires>, div);
});
