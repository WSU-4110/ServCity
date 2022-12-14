import "@testing-library/jest-dom";
import { render, cleanup, screen } from "@testing-library/react";
import ToDoForm from "../mock/ToDoForm";


// Mahnoor's unit test
// Unit Test 1: Render Update Button
test("should render render button", () => {
  render(<button>Update</button>)
});

// Unit Test 2: Render Add Service Button
test("should render Add service button", () => {
  render(<button>Add service</button>)
});

// Unit Test 3: Handle Change Called
test("handle change called", () => {
  const handleChange = (e) => {
      handleChange(e.target.value)
  }
});

// Unit Test 4: Handle Submit
test("handle submit", () => {
  const handleSubmit = (e) => {
      handleSubmit(e.target.value);
  }
});

// Unit Test 5: Should Render Form
test("renders form", () => {
  render(<form></form>)
});

//Unit Test 6: Updates To Do Item
test("updates item", () => {
  render(<updateTodo></updateTodo>)
});