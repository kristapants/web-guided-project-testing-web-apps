import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test('renders App without errors', () => {
  render(<App />);
})

test("renders the app header", ()=> {
  //Arrange: Setting up of our react component
  const app = render(<App />);
  console.log(app);

  //Act: extracting the part of dom we want to sets. Doing the behavoir
  //Assert: testing that that change exists
});