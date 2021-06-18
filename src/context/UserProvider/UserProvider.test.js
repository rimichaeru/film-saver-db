import React from "react";
import { render } from "@testing-library/react";
import UserProvider from "./UserProvider";

describe("UserProvider tests", () => {
  it("should render", () => {
    expect(render(<UserProvider />)).toBeTruthy();
  });
});
