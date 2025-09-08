import { render, screen } from "@testing-library/react";
import App from "./App";

test("button test case", () => {
  render(<App />);
  let btn = screen.getByText("Login");
  expect(btn).toBeInTheDocument();
});

test("p tag test case", () => {
  render(<App />);
  let pTag = screen.getByText("This is a paragraph");
  expect(pTag).toBeInTheDocument();
  expect(pTag).toHaveClass("para");
});

// test("h1 tag test case", () => {
//   render(<App />);
//   let hTag = screen.getByText("This is a Heading")
//   expect(hTag).toBeInTheDocument();
// });

test("multiple h1 tag test case", () => {
  render(<App />);
  let hTag = screen.getAllByText("This is a Heading");
  for (let i = 0; i < hTag.length; i++) {
    expect(hTag[i]).toBeInTheDocument();
  }
});
