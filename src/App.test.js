import { render, screen } from "@testing-library/react";
import App from "./App";

test("get by role", () => {
  render(<App />);
  const btn = screen.getAllByRole("button");
  const option = screen.getAllByRole("option");

  for (let i = 0; i < btn.length; i++) {
    expect(btn[i]).toBeInTheDocument();
  }

  for (let i = 0; i < option.length; i++) {
    expect(option[i]).toBeInTheDocument();
  }
});
