import * as React from "react";
import ActiveContent from "../../../src/content/ActiveContent";

const selectors = {
  PERSONAL_DATA_LOCATOR: '[aria-controls="personal-data-0"]',
  IMAGES_SELECTOR: '[data-test-id="collage-image-0"]',
  BANNERS_LOCATOR: '[data-test-id="test-accordion-text"]',
  RANDOMS_LOCATOR: '[data-test-id="show-modal"]',
};

export const actions = {
  mountActiveContent: (index: number) => {
    cy.mount(<ActiveContent index={index} />);
  },
  validatePersonalDataSelected: () => {
    cy.get(selectors.PERSONAL_DATA_LOCATOR).should("be.visible");
  },
  validateImagesSelected: () => {
    cy.get(selectors.IMAGES_SELECTOR).should("be.visible");
  },
  validateBannersSelected: () => {
    cy.get(selectors.BANNERS_LOCATOR).should("be.visible");
  },
  validateRandomsSelected: () => {
    cy.get(selectors.RANDOMS_LOCATOR).should("be.visible");
  },
};
