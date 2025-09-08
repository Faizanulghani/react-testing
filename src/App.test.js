import { render, screen } from "@testing-library/react";
import App from "./App";

test("input test case", () => {
  render(<App />);
  const inputs = screen.getAllByLabelText("Username");

  for (let i = 0; i < inputs.length; i++) {
    expect(inputs[i]).toBeInTheDocument();
  }
});
