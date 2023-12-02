# playwrightAutomation
PLaywright

Node js installation
npm installation
vs code installation
create project folder
install playwright through terminal
npm init playwright@latest

on exec command 

package.json
playwright.conf.js
tests

npm playwright -v

Run playwrigt Test
 npx playwright test == executes in headless
 npx playwright test --headed== executes in browser
 npx playwright show -report
 
 page is a fixture passed in anonumous function
 contains functions can be used to automate web application
 
 npx playwright test HomepageTest.spec.js - executes particular test
 npx playwright test HomepageTest.spec.js --project=chromium = executes in particular browser
 npx playwright test HomepageTest.spec.js --project=chromium --headed  == executes particula test in particular browser in non headless mode
 npx playwright test HomepageTest.spec.js --project=chromium --headed --debug
