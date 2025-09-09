import { render, screen, within } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("Querying Within Elements", async () => {
  userEvent.setup();
  render(<App />);
  let input = screen.getByRole("textbox");
  await userEvent.type(input, "Faizan");
  expect(screen.getByText("Faizan")).toBeInTheDocument();
});
