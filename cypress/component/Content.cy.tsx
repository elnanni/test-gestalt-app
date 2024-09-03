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
  /*it("change tabs", () => {
    cy.mount(<Content />);
    cy.get("[data-test-id='options-tabs-0']").click();
    cy.get('[title="Personal data"]').should("be.visible");
    cy.get("[data-test-id='options-tabs-1']").click();
  });*/
  it("check badge and tooltip", () => {
    cy.mount(<Content />);
    cy.get('[data-test-id="badge-new-icon"]').should('be.visible');
    cy.get('[data-test-id="badge-new-tooltip-text"]').should('not.exist');
    cy.get('[data-test-id="badge-new-text"]').trigger('mouseover');
    cy.get('[data-test-id="badge-new-tooltip-text"]').should('be.visible');
    cy.get('[data-test-id="badge-new-text"]').click();
  });
});
