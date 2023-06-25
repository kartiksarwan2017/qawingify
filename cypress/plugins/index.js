const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = (on, config) => {
  on('file:preprocessor', cucumber());

  // Add any other plugin configurations or customizations here

  // For example, to generate mochawesome reports
  const { initPlugin } = require('cypress-plugin-snapshots/plugin');
  initPlugin(on, config);

  return config;
};
