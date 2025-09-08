import { render, screen } from "@testing-library/react";
import App from "./App";

test("get by role", () => {
  render(<App />);
  const btn1 = screen.getByRole("button", { name: "CLick Me 1" });
  const btn2 = screen.getByRole("button", { name: "CLick Me 2" });
  const input1 = screen.getByRole("textbox", { name: "User Name" });
  const input2 = screen.getByRole("textbox", { name: "User Age" });
  const div = screen.getByRole("dummy")
  expect(div).toBeInTheDocument();



  expect(btn1).toBeInTheDocument();
  expect(btn2).toBeInTheDocument();
  expect(input1).toBeInTheDocument();
  expect(input2).toBeInTheDocument();
});
