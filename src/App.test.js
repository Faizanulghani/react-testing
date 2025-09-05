import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("Click Event Test", () => {
  render(<App />);
  let btn = screen.getByRole("button");
  fireEvent.click(btn);
  expect(screen.getByText("Hello World")).toBeInTheDocument();
});
