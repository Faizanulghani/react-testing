import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("onChange event testing", () => {
  render(<App />);
  let input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: "hello" } });
  expect(input.value).toBe("hello world");
});
