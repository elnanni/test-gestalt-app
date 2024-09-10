import * as React from "react";
import App from "../../../src/App";
import { actions as LogoActions } from "../header/logo/LogoActions";
import { actions as SloganActions } from "../header/slogan/SloganActions";
import { actions as PersonalAvatarActions } from "../content/PersonalAvatarActions";

describe("<App />", () => {
  it("renders", () => {
    cy.mount(<App />);
    LogoActions.validateLogo();
    LogoActions.validateText();
    LogoActions.validateLinkButton();
    SloganActions.validateSlogan();
    SloganActions.validateLink();
    PersonalAvatarActions.validateCorrectAvatarURL();
    PersonalAvatarActions.validateAvatarUrlError();
  });
});
