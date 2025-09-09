import { render, screen } from "@testing-library/react";
import App from "./App";

test("test match with function", async () => {
  render(<App />);
  const h1 = await screen.findByText("Data Found", {}, { timeout: 2000 });
  expect(h1).toBeInTheDocument();
});
