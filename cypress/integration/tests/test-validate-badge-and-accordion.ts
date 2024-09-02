    import GestaltTestPage from "../actions/GestaltTestPage";

    describe("Gestalt data test id validation for badge and accordion", () => {
      it("Validate Badge", () => {
        cy.visit("/");
        cy.get(GestaltTestPage.BADGE_NEW_ICON).should('be.visible');
        cy.get(GestaltTestPage.BADGE_NEW_TOOLTIP).should('not.exist');
        cy.get(GestaltTestPage.BADGE_NEW_TEXT).trigger('mouseover');
        cy.get(GestaltTestPage.BADGE_NEW_TOOLTIP).should('be.visible');
        cy.get(GestaltTestPage.BADGE_NEW_TEXT).click();
      });
      it("Validate Accordion", () => {
        cy.visit("/");
        cy.get(GestaltTestPage.BADGE_NEW_TEXT).click();
        cy.get(GestaltTestPage.ACCORDION_ICON).should('be.visible');
        cy.get(GestaltTestPage.ACCORDION_TITLE).should('have.text', "Testing Accordion");
      });
      it("Validate badge in accordion", () => {
        cy.visit("/");
        cy.get(GestaltTestPage.BADGE_NEW_TEXT).click();
        cy.get(GestaltTestPage.BADGE_ACCORDION_ICON).should('be.visible');
        cy.get(GestaltTestPage.BADGE_ACCORDION_TITLE).should('have.text', "Testing Badge in Accordion");
        cy.get(GestaltTestPage.BADGE_ACCORDION_BADGE).should('have.text', "New");
      });
      it("Validate icon button in accordion", () => {
        cy.visit("/");
        cy.get(GestaltTestPage.BADGE_NEW_TEXT).click();
        cy.get(GestaltTestPage.ICONBUTTON_ACCORDION_ICON).should('be.visible');
        cy.get(GestaltTestPage.ICONBUTTON_ACCORDION_TITLE).should('have.text', "Testing IconButton in Accordion");
        cy.get(GestaltTestPage.ICONBUTTON_ACCORDION_ICONBUTTON).click();
        cy.get(GestaltTestPage.ICONBUTTON_ACCORDION_POPOVER).should('have.text', "Help content!");
      });
    });
    