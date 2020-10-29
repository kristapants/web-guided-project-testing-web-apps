import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AnimalForm from "./AnimalForm";

import * as validator from 'email-validator';

test("renders AnimalForm without errors", ()=>{
    render(<AnimalForm />);
});

test("User can fill out and submit form", async ()=> {
    //Arrange: render component
    render(<AnimalForm />);

    //Act:
    //1. get access to form fields
    const speciesInput = screen.getByLabelText(/species/i);
    const ageInput = screen.getByLabelText(/age/i);
    const notesInput = screen.getByLabelText(/notes/i);

    //2. add text to our fields
    fireEvent.change(speciesInput, { target:{ value: 'canine', name:'species'}});
    fireEvent.change(ageInput, { target:{ value: '6', name:'age'}});
    fireEvent.change(notesInput, { target:{ value: 'cuteness', name:'notes'}});

    //3. get access to and click our button
    const button = screen.getByRole("button");
    fireEvent.click(button);

    //Assert Check that text is on screen
    const newAnimalText = await screen.getByText(/canine/i);
    expect(newAnimalText).toBeTruthy();
});