import { actions } from "./TabsActions";

beforeEach(() => {
  actions.mountContentTabs();
});

describe("Validate tabs", () => {
  it("Validate tab selection", () => {
    actions.validateTabSelection();
  });
  it("Validate badge and tooltip for Banner tab", () => {
    actions.validateBadge();
  });
});
