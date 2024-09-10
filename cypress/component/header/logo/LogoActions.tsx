import * as React from "react";
import Logo from "../../../../src/header/Logo";

const selectors = {
  IMAGE_LOGO: '[data-test-id="logo"]',
  TEXT_GESTALTEERS: '[data-test-id="gestalt-volunteers"]',
  BUTTON_FORK: '[data-test-id="volunteers-fork"]',
  BUTTON_ICON_FORK: '[data-test-id="volunteers-fork"] svg',
};

export const actions = {
  mountLogo: () => {
    cy.mount(<Logo />);
  },
  validateLogo: () => {
    cy.get(selectors.IMAGE_LOGO).should("be.visible");
  },
  validateText: () => {
    cy.get(selectors.TEXT_GESTALTEERS).should("contain", "Gestalt Volunteers!");
  },
  validateLinkButton: () => {
    cy.get(selectors.BUTTON_FORK).should("have.attr", "target", "_blank");
    cy.get(selectors.BUTTON_FORK).should(
      "have.attr",
      "href",
      "https://github.com/elnanni/gestalt/",
    );
    cy.get(selectors.BUTTON_FORK).should("contain", "Volunteers fork");
    cy.get(selectors.BUTTON_ICON_FORK).should("be.visible");
  },
};
