const locatorsDataTestId = {
  PERSONAL_DATA_BIRTHDAY_DTI: "#birthday",
  FAVORITE_COLOR_DTI: '[data-test-id="favorite-color"]',
  ACCORDION: '[aria-label="Expand section"]',
  ACCORDION_ARROW_DTI: "#personal-data-0",
  TAB: "a",
  TAB_GESTALT_VOLUNTEERS: '[data-test-id="gestalt-volunteers"]',
  TAB_GESTALT_VOLUNTEERS_IMPLEMENTATION:
    '[data-test-id="gestalt-volunteers-implementation"]',
  BADGE_NEW_ICON: '[data-test-id="badge-new-icon"]',
  BADGE_NEW_TOOLTIP: '[data-test-id="badge-new-tooltip"]',
  BADGE_NEW_TOOLTIP_TEXT: '[data-test-id="badge-new-tooltip-text"]',
  BADGE_NEW_TEXT: '[data-test-id="badge-new-text"]',
  ACCORDION_ICON: '[data-test-id="test-accordion-icon"]',
  ACCORDION_TITLE: '[data-test-id="test-accordion-text"]',
  BADGE_ACCORDION_ICON: '[data-test-id="test-badge-accordion-icon"]',
  BADGE_ACCORDION_TITLE: '[data-test-id="test-badge-accordion-text"]',
  BADGE_ACCORDION_BADGE: '[data-test-id="test-badge-accordion-badge-text"]',
  ICONBUTTON_ACCORDION_ICON: '[data-test-id="test-iconbutton-accordion-icon"]',
  ICONBUTTON_ACCORDION_TITLE: '[data-test-id="test-iconbutton-accordion-text"]',
  ICONBUTTON_ACCORDION_ICONBUTTON: '[data-test-id="accordion-icon-button"]',
  ICONBUTTON_ACCORDION_POPOVER: '[data-test-id="accordion-popover-text"]',
};

const locators = {
  // Global
  BODY: "body",
  A: "a",
  DIV: "div",
  // Header
  APP_HEADER: "[data-test-id='app-header']",
  IMAGE_LOGO: '[data-test-id="logo"]',
  FORK_BUTTON: '[data-test-id="volunteers-fork"]',
  FORK_EXTERNAL: '[data-test-id="volunteers-fork"] svg',
  CONTENT_HEADER: '[data-test-id="header-content"]',
  GESTALT_LINK: '[data-test-id="gestalt-link"]',
  GESTALT_EXTERNAL: '[data-test-id="gestalt-link"] svg',
  // Content
  AVATAR_URL: '[data-test-id="avatar-url"]',
  AVATAR_ERROR: "#avatar-input-error",
  AVATAR_CONTAINER: '[data-test-id="gestalt-avatar-svg"]',
  AVATAR_IMG: '[data-test-id="gestalt-avatar-svg"] img',
  // Tabs... can not create as no good identifiers for tabs are present, working wit <a> tag in Global section
  // Personal data Accordion collapsed... can not create as no good identifiers for accordion are present, working wit <div> tag in Global section
  // Personal data Accordion expanded
  PERSONAL_DATA_TITLE: '[title="Personal data"]',
  ACCORDION_ARROW: "#personal-data-0 svg",
  PERSONAL_DATA_NAME: '[data-test-id="name"]',
  PERSONAL_DATA_BIRTHDAY: "#birthday",
  BIRTHDAY_PREV_MONTH: '[aria-label="Previous Month"]',
  BIRTHDAY_DAY_5: ".react-datepicker__day--005",
  FAVORITE_COLOR: "#combobox-favorite-color",
  COLOR_BLUE: '[title="blue"]',
};

const GestaltTestPage = { ...locators, ...locatorsDataTestId };

export default GestaltTestPage;
