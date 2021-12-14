/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars

const fs = require('fs-extra');
const path = require('path');

function getConfigurationByEnv(ENVIRONMENT) {
  const pathToConfigFile = path.resolve('cypress/config', `${ENVIRONMENT}.json`);
  // check if file exists
  if (!fs.existsSync(pathToConfigFile)) {
    throw new Error(`Config file ${pathToConfigFile} does not exist`);
  }
  return fs.readJson(pathToConfigFile);
}
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  const ENVIRONMENT = config.env.ENVIRONMENT || 'local';
  return getConfigurationByEnv(ENVIRONMENT)
}
