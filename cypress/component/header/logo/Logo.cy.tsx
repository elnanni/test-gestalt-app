import { actions } from "./LogoActions";

beforeEach(() => {
  actions.mountLogo();
});

describe("Logo validations", () => {
  it("Validate Logo", () => {
    actions.validateLogo();
  });
  it("Validate Text", () => {
    actions.validateText();
  });
  it("Validate LinkButton", () => {
    actions.validateLinkButton();
  });
  it("Validate WashAnimated on hover", () => {
    cy.log(
      "Testing for on hover change is not possible as there is no current locator for WashAnimated",
    );
  });
});
