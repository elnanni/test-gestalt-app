import * as React from "react";
import Slogan from "../../../../src/header/Slogan";

const selectors = {
  TEXT_SLOGAN: '[data-test-id="gestalt-volunteers-implementation"]',
  LINK_GESTALT: '[data-test-id="gestalt-link"]',
};

export const actions = {
  mountSlogan: () => {
    cy.mount(<Slogan />);
  },
  validateSlogan: () => {
    cy.log(
      'As there is no data test id for the SVG, this is achieved by validating the text ", Opens a new tab"',
    );
    cy.get(selectors.TEXT_SLOGAN).should(
      "contain",
      "This is our awesome implementation test for Gestalt, Opens a new tab!",
    );
  },
  validateLink: () => {
    cy.get(selectors.LINK_GESTALT).should(
      "have.attr",
      "href",
      "https://gestalt.pinterest.systems/web/overview",
    );
    cy.get(selectors.LINK_GESTALT).should("have.attr", "target", "_blank");
  },
};
