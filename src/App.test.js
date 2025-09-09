import { render, screen, within } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("Querying Within Elements", async () => {
  userEvent.setup();
  render(<App />);
  const btn = screen.getByText("Click");
  await userEvent.click(btn);
  expect(screen.getByText("Hello")).toBeInTheDocument();
});
