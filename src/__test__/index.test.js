import "@testing-library/jest-dom";
import { render, screen, cleanup } from "@testing-library/react";
import DIY from "../mock/DIY";
import Alignment from "../mock/Alignment";
import OilChange from "../mock/Oilchange";
import Brakes from "../mock/Brakes";
import Tires from "../mock/Tires";
import FluidFlush from "../mock/FluidFlash";
import MockLogin from "../mock/MockLogin";
import AtHome from "../mock/AtHome";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Forum from "../mock/Forum";

// Poll's Test
// testing rendering
describe("Places Page Rendered", () => {
  afterEach(cleanup);
  // unit test 1
  it("Brake maintenance page renders correctly", () => {
    const div = document.createElement("div");
    render(<Brakes></Brakes>, div);
  });

  // unit test 2
  it("DIY page renders correctly", () => {
    const div = document.createElement("div");
    render(<DIY></DIY>, div);
  });

  // unit test 3
  it("Fluid Flash page renders correctly", () => {
    const div = document.createElement("div");
    render(<FluidFlush></FluidFlush>, div);
  });

  // unit test 4
  it("Oil Change page renders correctly", () => {
    const div = document.createElement("div");
    render(<OilChange></OilChange>, div);
  });

  // unit test 5
  it("Tire Aligment page renders correctly", () => {
    const div = document.createElement("div");
    render(<Alignment></Alignment>, div);
  });

  // unit test 6
  it("Tires page renders correctly", () => {
    const div = document.createElement("div");
    render(<Tires></Tires>, div);
  });
});

// Jaideep's Unit test
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
  //Unit Test 5
  it("should render a button for sign in", () => {
    render(<button1 />);
  });

  //Unit Test 6
  it("should render a button for sign up", () => {
    render(<button2 />);
  });
});

// Andrea unit test
describe("AtHome Feature", () => {
  //Unit Test 1: Button
  test("should render a button for navigating main page", () => {
    render(<Button />);
  });

  //Unit Test 2: Handels Table
  test("displays table component to console", () => {
    const HandleTable = (e) => {
      SetshowTable(!showTable);
      console.log(showTable);
    };
  });

  //Unit Test 3: Fetching Vehicle Make
  test("fetching vehicle make content from database", () => {
    const HandleVehicleMake = (event) => {
      SetMake(event.target.value);
    };
  });

  //Unit Test 4: MenuItem
  test("renders a Menu Item inside of the form component", () => {
    render(<MenuItem value="2015">2015</MenuItem>);
  });

  test("finds and displays the car image to consol", () => {
    render(<img src="Car.png" />);
  });

  //Unit Test 6: In-take of form content to results
  test("store and initialize results of form contents", () => {
    const PostFilterSubmit = () => {
      FIlter_Parts(make, model, year, FilterTypes).then((results) => {
        SetResults(results);
      });
    };
  });

  //Unit Test 7: Processing Fliter type content
  test("read and fetch filter type", () => {
    const HandleFilterTypes = (event) => {
      SetFiterTypes(event.target.value);
    };
  });
});

// Reem unit test
describe("Forum Feature", () => {
  //unit test 1 - rendering create post button
  it("if forum renders", () => {
    render(<Forum />);
  });

  //unit test 2 - rendering create post button
  it("if create post button renders", () => {
    render(<button />);
  });

  //unit test 3 - rendering div component for div components
  it("if forum renders", () => {
    render(<div />);
  });

  //unit test 4 - display create posts popup
  it("create posts titles render", () => {
    render(<h1 />);
  });

  //unit test 5 - display fetched data
  it("create posts titles render", () => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);

      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
  });

  //   //unit test 6 - rendering popup
  it("if forum renders", () => {
    render(<div className="postHeader" />);
  });
});
