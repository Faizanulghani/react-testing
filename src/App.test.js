import { render, screen, within } from "@testing-library/react";
import App from "./App";

test("Querying Within Elements", () => {
  render(<App />);
  const element = screen.getByText("Hello World");
  let subEl = within(element).getByText("Hello");
  expect(element).toBeInTheDocument();
  expect(subEl).toBeInTheDocument();
});
