import React from "react";
import { render, screen } from "@testing-library/react";
import AnimalForm from "./AnimalForm";

test("renders AnimalForm without errors", ()=>{
    render(<AnimalForm />);
});