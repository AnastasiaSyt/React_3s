import { defineConfig } from "cypress";
import vitePreprocessor from "cypress-vite";
import coverage from '@cypress/code-coverage/task';

export default defineConfig({
  env: {
    codeCoverage: {
        exclude: "cypress/**/*.*",
    },
  },
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", vitePreprocessor());
      coverage(on, config);
      return config;
    },
    baseUrl: 'http://localhost:5173',
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    setupNodeEvents(on, config) {
      //require("@cypress/code-coverage/task")(on, config);
      coverage(on, config);
      return config;
    }
  },
});
