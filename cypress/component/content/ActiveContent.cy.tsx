import * as React from "react";
import { actions } from "./ActiveContentActions";

describe("Validates active content", () => {
  it("Validates Personal data content selected", () => {
    actions.mountActiveContent(0);
    actions.validatePersonalDataSelected();
  });
  it("Validates Images content selected", () => {
    actions.mountActiveContent(1);
    actions.validateImagesSelected();
  });
  it("Validates Banners content selected", () => {
    actions.mountActiveContent(2);
    actions.validateBannersSelected();
  });
  it("Validates Randoms content selected", () => {
    actions.mountActiveContent(3);
    actions.validateRandomsSelected();
  });
});
