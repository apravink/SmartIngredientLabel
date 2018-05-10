import React from "react";
import Scanner from "./scanner";

import renderer from "react-test-renderer";

describe("rendering", () => {
  test("renders correctly", () => {
    const result = renderer.create(<Scanner />).toJSON();
    console.log(result);
    expect(result).toMatchSnapshot();
  });
});
