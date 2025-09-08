import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { handleOtherMethod } from "./helper";

test("Method Testing cacse 1", () => {
  render(<App />);
  const btn = screen.getByTestId("button");
  fireEvent.click(btn);
  expect(screen.getByText("Updated Data")).toBeInTheDocument();
});

test("Method Testing cacse 2", () => {
  expect(handleOtherMethod()).toMatch("hi")
});
