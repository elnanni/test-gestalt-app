import * as React from "react";
import ContentTabs from "../../../src/content/ContentTabs";

const selectors = {
  TAB_SELECTED: "a[aria-current]",
  TABS: "a",
  ICON_BADGE: '[data-test-id="badge-new-icon"]',
  TOOLTIP_BADGE: '[data-test-id="badge-new-tooltip-text"]',
  TEXT_BADGE: '[data-test-id="badge-new-text"]',
};

export const actions = {
  mountContentTabs: () => {
    cy.mount(<ContentTabs setParentActiveIndex={() => {}} />);
  },
  validateTabSelection: () => {
    cy.get(selectors.TABS).contains("Randoms").click();
    cy.get(selectors.TAB_SELECTED).contains("Randoms");
    cy.get(selectors.TABS).contains("Banners").click();
    cy.get(selectors.TAB_SELECTED).contains("Banners");
    cy.get(selectors.TABS).contains("Images").click();
    cy.get(selectors.TAB_SELECTED).contains("Images");
    cy.get(selectors.TABS).contains("Personal data").click();
    cy.get(selectors.TAB_SELECTED).contains("Personal data");
  },
  validateBadge: () => {
    cy.get(selectors.ICON_BADGE).should("be.visible");
    cy.get(selectors.TOOLTIP_BADGE).should("not.exist");
    cy.get(selectors.TEXT_BADGE).trigger("mouseover");
    cy.get(selectors.TOOLTIP_BADGE).should("be.visible");
    cy.get(selectors.TEXT_BADGE).click();
  },
};
