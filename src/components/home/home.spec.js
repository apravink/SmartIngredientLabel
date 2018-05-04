import React from "react";
import Home from "./home";

import renderer from "react-test-renderer";

describe("rendering", () => {
  test("renders correctly", () => {
    const result = renderer.create(<Home />).toJSON();
    console.log(result);
    expect(result).toMatchSnapshot();
  });
});
