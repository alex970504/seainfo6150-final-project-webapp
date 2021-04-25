import React from "react";
import Home from "./Home.jsx";

it("renders the home component correctly", () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});
