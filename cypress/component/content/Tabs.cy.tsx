import * as React from "react";
import Content from "../../../src/content/Content";

describe("<Content />", () => {
  it("check badge and tooltip", () => {
    cy.mount(<Content />);
    cy.get('[data-test-id="badge-new-icon"]').should("be.visible");
    cy.get('[data-test-id="badge-new-tooltip-text"]').should("not.exist");
    cy.get('[data-test-id="badge-new-text"]').trigger("mouseover");
    cy.get('[data-test-id="badge-new-tooltip-text"]').should("be.visible");
    cy.get('[data-test-id="badge-new-text"]').click();
  });
});
