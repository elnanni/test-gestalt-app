import React from "react";
import { render, queryByAttribute } from "@testing-library/react";
import App from "./App";

test("renders volunteers Gestalt test page", () => {
  const appContainer = render(<App />).container;
  const headerElement = queryByAttribute.bind(null, "id")(
    appContainer,
    "App-header",
  );
  expect(headerElement).toBeInTheDocument();
});
