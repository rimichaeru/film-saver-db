import React from "react";
import { render } from "@testing-library/react";
import FilmCard from "./FilmCard";

describe("FilmCard tests", () => {
  it("should render", () => {
    expect(render(<FilmCard />)).toBeTruthy();
  });
});
