import { render, screen } from "@testing-library/react";
import App from "./App";

test("get by label text 1", () => {
  render(<App />);
  const input = screen.getByLabelText("Username");
  expect(input).toBeInTheDocument();
  expect(input).toHaveValue("anil");
});
test("get by label text 2", () => {
  render(<App />);
  const skill = screen.getByLabelText("Skills");
  expect(skill).toBeInTheDocument();
  expect(skill).toBeChecked()
});
