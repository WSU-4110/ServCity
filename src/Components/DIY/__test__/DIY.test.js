import React from "react";
import DIY from "../index";
import { render } from "@testing-library/react";

it("DIY page renders correctly", () => {
  const div = document.createElement("div");
  render(<DIY></DIY>, div);
});
