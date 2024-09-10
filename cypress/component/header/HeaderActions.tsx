import * as React from "react";
import Header from "../../../src/header/Header";

export const actions = {
  mountHeader: () => {
    cy.mount(<Header />);
  },
};
