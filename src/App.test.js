import { render, screen } from "@testing-library/react";
import App from "./App";

test("test match with function", () => {
  render(<App />);
  const div = screen.getByText((content, element) =>
    content.startsWith("Hello")
  );
  expect(div).toBeInTheDocument();
});
