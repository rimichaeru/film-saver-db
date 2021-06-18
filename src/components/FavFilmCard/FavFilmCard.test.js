import React from "react";
import { render } from "@testing-library/react";
import FavFilmCard from "./FavFilmCard";

describe("FavFilmCard tests", () => {
  it("should render", () => {
    expect(render(<FavFilmCard />)).toBeTruthy();
  });
});
