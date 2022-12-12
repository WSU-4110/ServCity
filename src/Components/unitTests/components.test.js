import "@testing-library/jest-dom";
import MockLogin from "../../Mock/MockLogin";
import { render, cleanup, screen } from "@testing-library/react";

// Jaideep Chunduri Unit test
//Unit Test 1
it("Mock Login renders correctly", () => {
  const div = document.createElement("div");
  render(<MockLogin></MockLogin>, div);
});

//Unit Test 2
describe("Login UI", () => {
  beforeEach(() => render(<MockLogin />));
  afterEach(cleanup);

  it("The Login pop up should display Username", () => {
    const Username = screen.getByRole("heading", {
      name: /Username/i,
    });
    expect(Username).toBeInTheDocument();
  });

  //Unit Test 3
  it("The Login pop up should display Password", () => {
    const Password = screen.getByRole("heading", {
      name: /Password/i,
    });
    expect(Password).toBeInTheDocument();
  });
  //Unit Test 4
  it("The Login pop up should have a text field", () => {
    const Textfield = screen.getByTestId("email-input");
    expect(Textfield).toBeInTheDocument();
  });
});

//Unit Test 5
it("should render a button for sign in", () => {
  render(<button1 />);
});

//Unit Test 6
it("should render a button for sign up", () => {
  render(<button2 />);
});
