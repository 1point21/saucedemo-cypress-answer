# Cypress Automation Test Framework

## Background



## Pre-requisites

Before running the test suite, ensure [node](https://nodejs.org/en/download) is installed on the local machine.

## Installing Cypress

Cypress is listed as a dev dependency in the package.json. Run `npm i` to install all relevant dependencies for the project.

Then run the command `npm run cypress:open` to open Cypress. Choose **E2E Testing** and then **Chrome Web Browser**. 

## Running the Script

In order to test the login functionality of the saucedemo website, select the script called 

## Further development

Possible next steps:

1. Build out the framework to test the other accepted usernames. I should like to do this using javascript logic to loop through an array to my code more DRY.

2. Dynamically retrieve the values for usernames and passwords from the website and store them in local variables in the script. This would future-proof the test script in the event that the website updated its test credentials

3. Extend the test framework to test functionality of the web shop, once login has been successful.
   
4. Refactor - understand more about best practice for structure of test framework. My code is currently repetitive - I should like to refactor in order to combine the error testing for wrong password and/or username give the majority of the code is the same.