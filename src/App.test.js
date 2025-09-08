import { render, screen } from "@testing-library/react";
import App from "./App";

test("input test case", () => {
  render(<App />);
  const inputs = screen.getAllByPlaceholderText("Enter Username");

  for (let i = 0; i < inputs.length; i++) {
    expect(inputs[i]).toBeInTheDocument();
  }
});
