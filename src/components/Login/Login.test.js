import {
  fireEvent,
  render,
  screen,
  waitFor,
  act,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Login from "./Login";
import React from "react";

jest.mock("axios", () => ({
  __esModule: true,

  default: {
    get: () => ({
      data: { id: 1, name: "John" },
    }),
  },
}));

test("username input should be rendered", () => {
  render(<Login />);
  const usernameInputelement = screen.getByPlaceholderText(/username/i);
  expect(usernameInputelement).toBeInTheDocument();
});

test("passwordinput should be rendered", () => {
  render(<Login />);
  const passwordInputelement = screen.getByPlaceholderText(/password/i);
  expect(passwordInputelement).toBeInTheDocument();
});

test("button should be rendered", () => {
  render(<Login />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument();
});

test("username input should be empty", () => {
  render(<Login />);
  const usernameInputelement = screen.getByPlaceholderText(/username/i);
  expect(usernameInputelement.value).toBe("");
});

test("password input should be empty", () => {
  render(<Login />);
  const passwordInputelement = screen.getByPlaceholderText(/username/i);
  expect(passwordInputelement.value).toBe("");
});

test("button should be disabled", () => {
  render(<Login />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeDisabled();
});

test("button should be rendered", () => {
  render(<Login />);
  const buttonInputelement = screen.getByRole("button");
  expect(buttonInputelement).toBeInTheDocument();
});

test("loading should not be rendered", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).not.toHaveTextContent(/please wait/i);
});

test("error message should not be visible", () => {
  render(<Login />);
  const errorEl = screen.getByTestId("error");
  expect(errorEl).not.toBeVisible();
});

test("username input should have value", () => {
  render(<Login />);
  const usernameInputelement = screen.getByPlaceholderText(/username/i);
  const testValue = "text";

  fireEvent.change(usernameInputelement, { target: { value: testValue } });
  expect(usernameInputelement.value).toBe(testValue);
});

test("password input should have value", () => {
  render(<Login />);
  const passwordInputelement = screen.getByPlaceholderText(/password/i);
  const testValue = "text";

  fireEvent.change(passwordInputelement, { target: { value: testValue } });
  expect(passwordInputelement.value).toBe(testValue);
});

test("button should not be disabled when inputs exist", () => {
  render(<Login />);

  const buttonEl = screen.getByRole("button");
  const usernameInputelement = screen.getByPlaceholderText(/username/i);
  const passwordInputelement = screen.getByPlaceholderText(/password/i);

  const testValue = "test";

  fireEvent.change(usernameInputelement, { target: { value: testValue } });
  fireEvent.change(passwordInputelement, { target: { value: testValue } });

  expect(buttonEl).not.toBeDisabled();
});

test("loading should be rendered when click", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);

  const testValue = "test";

  act(() => {
    fireEvent.change(usernameInputEl, { target: { value: testValue } });
    fireEvent.change(passwordInputEl, { target: { value: testValue } });
    fireEvent.click(buttonEl);
  });

  expect(buttonEl).toHaveTextContent(/please wait/i);
});

test("loading should not be rendered after fetching", async () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);

  const testValue = "test";
  console.log({ usernameInputEl, passwordInputEl });

  act(() => {
    fireEvent.change(usernameInputEl, { target: { value: testValue } });
    fireEvent.change(passwordInputEl, { target: { value: testValue } });
    fireEvent.click(buttonEl);
  });

  await waitFor(() => expect(buttonEl).not.toHaveTextContent(/please wait/i));
});

test("user should be rendered after fetching", async () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);

  const testValue = "test";

  act(() => {
    fireEvent.change(usernameInputEl, { target: { value: testValue } });
    fireEvent.change(passwordInputEl, { target: { value: testValue } });
    fireEvent.click(buttonEl);
  });

  const userItem = await screen.findByText("John");

  expect(userItem).toBeInTheDocument();
});
