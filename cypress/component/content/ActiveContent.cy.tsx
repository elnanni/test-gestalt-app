import * as React from "react";
import ActiveContent from "../../../src/content/ActiveContent";

describe("Validates active content", () => {
  it("Validates Personal data content selected", () => {
    cy.mount(<ActiveContent index={0} />);
    cy.get('[aria-controls="personal-data-0"]').should("be.visible");
  });
  it("Validates Images content selected", () => {
    cy.mount(<ActiveContent index={1} />);
    cy.get('[data-test-id="collage-image-0"]').should("be.visible");
  });
  it("Validates Banners content selected", () => {
    cy.mount(<ActiveContent index={2} />);
    cy.get('[data-test-id="test-accordion-text"]').should("be.visible");
  });
  it("Validates Randoms content selected", () => {
    cy.mount(<ActiveContent index={3} />);
    cy.get('[data-test-id="show-modal"]').should("be.visible");
  });
});
