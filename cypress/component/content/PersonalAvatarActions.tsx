import * as React from "react";
import PersonalAvatar from "../../../src/content/PersonalAvatar";

const selectors = {
  LABEL_AVATAR_URL: '[data-test-id="avatar-url-label"]',
  INPUT_AVATAR_URL: '[data-test-id="avatar-url"]',
  HELPER_AVATAR_URL: '[data-test-id="avatar-url-helper-text"]',
  ERROR_ICON_AVATAR_URL: '[data-test-id="avatar-url-error"]',
  AVATAR: '[data-test-id="gestalt-avatar-svg"]',
  IMAGE_AVATAR: '[data-test-id="gestalt-avatar-svg"] img',
};

export const actions = {
  mountPersonalAvatar: () => {
    cy.mount(<PersonalAvatar />);
  },
  setAvatarUrl: (url: string) => {
    cy.get(selectors.INPUT_AVATAR_URL).clear().type(url);
  },
  blurAvatarInputField: () => {
    cy.get(selectors.INPUT_AVATAR_URL).parent().parent().parent().click();
  },
  validateAvatarUrlError: () => {
    actions.setAvatarUrl("2");
    actions.blurAvatarInputField();
    cy.get(selectors.ERROR_ICON_AVATAR_URL).should("be.visible");
  },
  validateCorrectAvatarURL: () => {
    cy.get(selectors.LABEL_AVATAR_URL).should("contain", "Avatar URL");
    cy.get(selectors.HELPER_AVATAR_URL).should(
      "contain",
      "Enter url for an avatar",
    );
    actions.setAvatarUrl("a");
    actions.blurAvatarInputField();
    actions.validateAvatarUrlError();
    actions.setAvatarUrl(
      "https://avatars.githubusercontent.com/u/81310591?v=4",
    );
    actions.blurAvatarInputField();
    cy.get(selectors.ERROR_ICON_AVATAR_URL).should("not.exist");
    cy.get(selectors.AVATAR).should("be.visible");
    cy.get(selectors.IMAGE_AVATAR)
      .should("have.attr", "src")
      .should("include", "81310591");
  },
};
