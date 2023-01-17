const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {

    baseUrl: "https://notes-serverless-app.com",
    defaultCommandTimeout: 90000,
    "chromeWebSecurity": false,
    "projectId": "6jpe8q",
    

    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
