import { actions } from "./PersonalAvatarActions";

beforeEach(() => {
  actions.mountPersonalAvatar();
});

describe("PersonalAvatar validations", () => {
  it("Validate Avatar url error", () => {
    actions.validateAvatarUrlError();
  });
  it("renders avatar from url", () => {
    actions.validateCorrectAvatarURL();
  });
});
