import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: "**/integration/tests/*.ts",
    baseUrl: "http://localhost:3001",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
