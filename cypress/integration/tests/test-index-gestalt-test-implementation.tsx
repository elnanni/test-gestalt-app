import GestaltTestPage from "../actions/GestaltTestPage";

describe("Gestalt test implementation validation", () => {
  it("Validate header", () => {
    cy.visit("/");
    cy.get(GestaltTestPage.APP_HEADER).should("be.visible");
    cy.get(GestaltTestPage.LOGO_IMG).should("be.visible");
    cy.get(GestaltTestPage.FORK_BUTTON).should("be.visible");
    cy.get(GestaltTestPage.FORK_EXTERNAL).should("be.visible");
    cy.get(GestaltTestPage.CONTENT_HEADER).should("be.visible");
    cy.get(GestaltTestPage.GESTALT_LINK).should("be.visible");
    cy.get(GestaltTestPage.GESTALT_EXTERNAL).should("be.visible");
    cy.get(GestaltTestPage.AVATAR_URL).type("2");
    cy.get(GestaltTestPage.BODY).click();
    cy.get(GestaltTestPage.AVATAR_ERROR).should("be.visible");
    cy.get(GestaltTestPage.AVATAR_URL)
      .clear()
      .type("https://avatars.githubusercontent.com/u/81310591?v=4");
    cy.get(GestaltTestPage.BODY).click();
    cy.get(GestaltTestPage.AVATAR_CONTAINER).should("be.visible");
    cy.get(GestaltTestPage.AVATAR_IMG)
      .should("have.attr", "src")
      .should("include", "81310591");
    cy.get(GestaltTestPage.A).contains("Personal data").click();
    cy.get(GestaltTestPage.PERSONAL_DATA_TITLE).should("be.visible");
    cy.get(GestaltTestPage.DIV).should("contain", "Fill personal data");
    cy.get(GestaltTestPage.ACCORDION_ARROW_DTI).click();
    cy.get(GestaltTestPage.PERSONAL_DATA_NAME).type("Juan Benavides");
    cy.get(GestaltTestPage.PERSONAL_DATA_BIRTHDAY_DTI).click();
    for (let i = 0; i < 24; i++)
      cy.get(GestaltTestPage.BIRTHDAY_PREV_MONTH).click();
    cy.get(GestaltTestPage.BIRTHDAY_DAY_5).first().click();
    cy.get(GestaltTestPage.FAVORITE_COLOR_DTI).click();
    cy.get(GestaltTestPage.COLOR_BLUE).click();
    cy.get(GestaltTestPage.ACCORDION_ARROW).click();
    cy.get(GestaltTestPage.DIV).should("contain", "Name: Juan Benavides");
    cy.get(GestaltTestPage.DIV).should("contain", "Age: 2");
    cy.get(GestaltTestPage.DIV).should("contain", "Color: blue");
    cy.get(GestaltTestPage.A).contains("Tab 2").click();
    cy.get(GestaltTestPage.DIV).should("contain", "Tab 2 selected");
  });
});
