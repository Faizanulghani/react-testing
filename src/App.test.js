import { render, screen } from "@testing-library/react";
import App from "./App";

test("First React Test Case", () => {
  render(<App />);
  const text = screen.getByText(/First React Test Case/i);
  const title = screen.getByTitle("Ai Image");
  expect(text).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});
 