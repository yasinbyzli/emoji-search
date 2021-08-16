import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import App from "../App.js";

describe("emoji test", () => {
  let title;

  beforeEach(() => {
    render(<App />);

    title = screen.getByText(/Emoji Search/i);
  });

  test("header should be rendered on page load", () => {
    expect(title).toBeInTheDocument();
  });

  test("emoji list should be rendered on page load", () => {
    const { queryByTestId } = render(<App />);
    expect(queryByTestId("component-emoji-result-row"));
  });

  test("The emoji list should be filtered when a value is entered into the input", () => {
    const input = screen.getByLabelText("Search");
    const filter = "100";
    userEvent.type(input, filter);
    expect(screen.getByText(filter)).toBeInTheDocument();
  });

  test("click on emoji should copy value", () => {
    const emoji = screen.getByText(/100/i);
    userEvent.click(emoji);
  });
});
