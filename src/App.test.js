import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App.jsx";
import React from "react";

describe("App", () => {
  test("renders learn React component", () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders 3 list items", () => {
    render(<App />);
    const listItemElement = screen.getAllByRole("listitem");
    // expect(listItemElement).toHaveLength(3);
    expect(listItemElement.length).toEqual(3);
  });

  test("renders testid", () => {
    render(<App />);
    const testIdElement = screen.getByTestId("mytestid");
    expect(testIdElement).toBeInTheDocument();
  });

  test("renders title with sum", () => {
    render(<App />);
    const titleElement = screen.getByTitle("sum");
    console.log(titleElement.textContent);
    expect(titleElement.textContent).toBe("3");
  });
});
