import React from "react";
import { ReactDOM } from "react-dom";
import TireAlignment from "../index";
import { render, screen } from "@testing-library/react";

it("Tire Aligment page renders correctly", () => {
  const div = document.createElement("div");
  render(<TireAlignment></TireAlignment>, div);
});
