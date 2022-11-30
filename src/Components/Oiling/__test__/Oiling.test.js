import React from "react";
import { ReactDOM } from "react-dom";
import Oiling from "../index";
import { render, screen } from "@testing-library/react";

it("Oil Change page renders correctly", () => {
  const div = document.createElement("div");
  render(<Oiling></Oiling>, div);
});
