import React from "react";
import { ReactDOM } from "react-dom";
import DIY from "../index";
import { render, screen } from "@testing-library/react";

it("DIY page renders correctly", () => {
  const div = document.createElement("div");
  render(<DIY></DIY>, div);
});
