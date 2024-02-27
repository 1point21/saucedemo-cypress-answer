# Cypress Automation Test Framework

## Background

This repo contains an Automation Test framework in Cypress to test the functionality of a sample login page. For more information, see the `.pdf` file included in the repo.

## Pre-requisites

Before running the test suite, ensure [node](https://nodejs.org/en/download) is installed on the local machine.

Clone this repo and open in IDE of choice. Open terminal and `cd` into correct directory.

## Installing Cypress

Cypress is listed as a dev dependency in the package.json. In correct root directory for this project, run `npm i` to install all relevant dependencies for the project.

Then run the command `npm run cypress:open` to open Cypress. Choose **E2E Testing** and then **Chrome Web Browser**. 

_NOTE: the option `chromeWebSecurity` is set to `false` in the `cypress.config.js` config file_

## Running the Script

In order to test the login functionality of the saucedemo website, select the script called `saucedemo-login.cy.js`

### Tests

The following tests are run:

**Visit website and login** - The script will navigate to the website and test the login functionality using in sample username and password. 

**Check error message if wrong credentials** - two `it`-blocks, one for each of wrong username and password. The script checks that the error message is displayed and can be removed

**Check that website is not directly accessible via url** - The script will attmempt to navigate to the website bypassing the login page.

_NOTE: to avoid a 404-error, the `failOnStatusCode` option is set to `false`_

## Further development

Possible next steps:

1. **Build out the framework to test the other accepted usernames**. I should like to do this using javascript logic to loop through an array to my code more DRY.

2. **Dynamically retrieve the values for usernames and passwords** from the website and store them in local variables in the script. This would future-proof the test script in the event that the website updated its test credentials

3. **Extend the test framework** to test functionality of the web shop, once login has been successful.
   
4. **Refactor** - understand more about best practice for structure of test framework. My code is currently repetitive - I should like to refactor in order to combine the error testing for wrong password and/or username give the majority of the code is the same.