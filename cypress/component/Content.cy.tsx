import React from "react";
import Content from "../../src/Content";

describe("<Content />", () => {
  it("renders avatar url error", () => {
    cy.mount(<Content />);
    cy.get('[data-test-id="avatar-url"]').type("2");
    cy.get("body").click();
    cy.get("#avatar-input-error").should("be.visible");
  });
  it("renders avatar from url", () => {
    cy.mount(<Content />);
    cy.get('[data-test-id="avatar-url"]').type("a");
    cy.get("body").click();
    cy.get('[data-test-id="avatar-url"]')
      .clear()
      .type("https://avatars.githubusercontent.com/u/81310591?v=4");
    cy.get("body").click();
    cy.get('[data-test-id="gestalt-avatar-svg"]').should("be.visible");
    cy.get('[data-test-id="gestalt-avatar-svg"] img')
      .should("have.attr", "src")
      .should("include", "81310591");
  });
  it("change tabs", () => {
    cy.mount(<Content />);
    cy.get("a").contains("Personal data").click();
    cy.get('[title="Personal data"]').should("be.visible");
    cy.get("a").contains("Tab 2").click();
    cy.get("div").should("contain", "Tab 2 selected");
  });
});
