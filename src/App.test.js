import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test('renders App without errors', () => {
  render(<App />);
})

test("renders the app header", ()=> {
  //Arrange: Setting up of our react component
  const app = render(<App />);

  //Act: extracting the part of dom we want to sets. Doing the behavoir
  const header = screen.queryByText("Add New Animal");

  //Assert: testing that that change exists
  expect(header).toBeInTheDocument();
  expect(header).toBeTruthy();
});