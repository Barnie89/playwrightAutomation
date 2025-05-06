// my-test.js
const base = require('@playwright/test');

exports.test = base.test.extend({
  // Define an option and provide a default value.
  // We can later override it in the config.
  person: [{username: 'pavanol', password: 'test@123'}, { option: true }],
});