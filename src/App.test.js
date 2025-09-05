import { render, screen } from "@testing-library/react";
import App from "./App";

test("First React Test Case", () => {
  render(<App />);
  const text = screen.getByText(/First React Test Case/i);
  const title = screen.getByTitle("Ai Image");
  expect(text).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});

test("Testing Input Box", () => {
  render(<App />);
  let checkInput = screen.getByRole("textbox");
  let checkInputPlaceholder = screen.getByPlaceholderText("This is input");
  expect(checkInput).toBeInTheDocument();
  expect(checkInputPlaceholder).toBeInTheDocument();
  expect(checkInput).toHaveAttribute("name", "username");
  expect(checkInput).toHaveAttribute("id", "userId");
  expect(checkInput).toHaveAttribute("type", "text");
});

describe.only("test case group", () => {
  test("Testing Input Box", () => {
    render(<App />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name", "username");
  });
  test("Testing Input Box 2", () => {
    render(<App />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name", "username");
  });
  describe("inner describe test group", () => {
    test("Testing Input Box 2", () => {
      render(<App />);
      let checkInput = screen.getByRole("textbox");
      expect(checkInput).toHaveAttribute("name", "username");
    });
  });
});
describe("Api test case group", () => {
  test("Testing Input Box", () => {
    render(<App />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name", "username");
  });
});
