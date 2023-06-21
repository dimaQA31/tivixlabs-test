import { defineConfig } from 'cypress'
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
  defaultCommandTimeout: 20000,
  pageLoadTimeout: 20000,
  requestTimeout: 20000,
  responseTimeout: 20000,
  screenshotOnRunFailure: true,
  trashAssetsBeforeRuns: true,
  video: false,
  chromeWebSecurity: false,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    baseUrl: 'http://qalab.pl.tivixlabs.com/',
    specPattern: "**/*.feature",
    async setupNodeEvents(
        on: Cypress.PluginEvents,
        config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      await addCucumberPreprocessorPlugin(on, config);
      on(
          "file:preprocessor",
          createBundler({
            plugins: [createEsbuildPlugin(config)],
          })
      );
      return config;
    },
    supportFile: false
  },
})



