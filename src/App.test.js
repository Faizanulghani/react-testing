import { render, screen } from "@testing-library/react";
import App from "./App";

test("get by role", () => {
  render(<App />);
  const input = screen.getByRole("textbox");
  const btn = screen.getByRole("button");
  expect(input).toBeInTheDocument();
  expect(input).toHaveValue("hello");
  expect(input).toBeDisabled();
  expect(btn).toBeInTheDocument();
});
