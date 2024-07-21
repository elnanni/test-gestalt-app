const locators = {
  // Global
  BODY: "body",
  A: "a",
  DIV: "div",
  // Header
  APP_HEADER: "#App-header",
  LOGO_IMG: "#logo-container img",
  FORK_BUTTON: '[data-test-id="volunteers-fork"]',
  FORK_EXTERNAL: '[data-test-id="volunteers-fork"] svg',
  CONTENT_HEADER: "#header-content",
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

const GestaltTestPage = { ...locators };

export default GestaltTestPage;
