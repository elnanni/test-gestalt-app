import { actions } from "./HeaderActions";
import { actions as LogoActions } from "./logo/LogoActions";
import { actions as SloganActions } from "./slogan/SloganActions";

beforeEach(() => {
  actions.mountHeader();
});

describe("Header validations", () => {
  it("Validate Header", () => {
    LogoActions.validateLogo();
    LogoActions.validateText();
    LogoActions.validateLinkButton();
    SloganActions.validateSlogan();
    SloganActions.validateLink();
  });
});
