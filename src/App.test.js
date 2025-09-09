import { render, screen } from "@testing-library/react";
import App from "./App";

test("test match with function", () => {
  render(<App />);
  // const div = screen.getByText("Login");
  const div = screen.queryByText("Login");
  expect(div).not.toBeInTheDocument();
});
