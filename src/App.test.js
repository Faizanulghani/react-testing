import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

// beforeAll(() => {
//   console.log("Before All");
// });
// beforeEach(() => {
//   console.log("Before Each");
// });

test("Click Event Test1", () => {
  console.log("1");
  render(<App />);
  let btn = screen.getByRole("button");
  fireEvent.click(btn);
  expect(screen.getByText("Hello World")).toBeInTheDocument();
});
test("Click Event Test2", () => {
  console.log("2");
  render(<App />);
  let btn = screen.getByRole("button");
  fireEvent.click(btn);
  expect(screen.getByText("Hello World")).toBeInTheDocument();
});
test("Click Event Test3", () => {
  console.log("3");
  render(<App />);
  let btn = screen.getByRole("button");
  fireEvent.click(btn);
  expect(screen.getByText("Hello World")).toBeInTheDocument();
});

// afterAll(()=>{
//   console.log("After All");
// })

afterEach(()=>{
  console.log("After Each");
})