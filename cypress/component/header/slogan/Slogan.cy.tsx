import { actions } from "./SloganActions";

beforeEach(() => {
  actions.mountSlogan();
});

describe("Validate Slogan", () => {
  it("Validate Slogan text", () => {
    actions.validateSlogan();
  });
  it("Validate Link", () => {
    actions.validateLink();
  });
});
