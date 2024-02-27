// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe("test login page for saucedemo website", () => {
  it("should vist the saucedemo website and log in", () => {
    //go to saucedemo webpage and check that url is correct
    cy.visit("https://www.saucedemo.com/");
    cy.url().should("include", "saucedemo");

    //select username field and type in username
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="username"]').should("have.value", "standard_user");

    // select password field and type in password
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="password"]').should("have.value", "secret_sauce");

    // click on "login" button and check url/visibility of one item
    cy.get("[id=login-button]").click();
    cy.url().should("include", "/inventory");
    cy.get('.inventory_item_name').should('include.text', 'Backpack')

  });

  it("should display correct error message if USERNAME incorrect", () => {
    //go to saucedemo webpage and check that url is correct
    cy.visit("https://www.saucedemo.com/");
    cy.url().should("include", "saucedemo");

    //select username field and type in INCORRECT username
    cy.get('[data-test="username"]').type("testuser123");
    cy.get('[data-test="username"]').should("have.value", "testuser123");

    // select password field and type in password
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="password"]').should("have.value", "secret_sauce");

    // click on "login" button and check error message
    cy.get("[id=login-button]").click();
    cy.get('[data-test="error"]').should(
      "include.text",
      `Epic sadface: Username`
    );

    // click on "x" on error message to clear and check error box disappeared
    cy.get(".error-button > .svg-inline--fa").click();
    cy.get('[data-test="error"]').should("not.exist");
  });

  it("should display correct error message if PASSWORD incorrect", () => {
    //go to saucedemo webpage and check that url is correct
    cy.visit("https://www.saucedemo.com/");
    cy.url().should("include", "saucedemo");

    //select username field and type in INCORRECT username
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="username"]').should("have.value", "standard_user");

    // select password field and type in password
    cy.get('[data-test="password"]').type("wrong_password");
    cy.get('[data-test="password"]').should("have.value", "wrong_password");

    // click on "login" button and check error message
    cy.get("[id=login-button]").click();
    cy.get('[data-test="error"]').should("include.text", `password`);

    // click on "x" on error message to clear and check error box disappeared
    cy.get(".error-button > .svg-inline--fa").click();
    cy.get('[data-test="error"]').should("not.exist");
  });

  it("should not allow access to the webshop directly via url", () => {
    //go to the saucedemo webshop directly via url
    cy.visit("https://www.saucedemo.com/inventory.html", {
      failOnStatusCode: false,
    });
    cy.get('[data-test="error"]')
      .should("exist")
      .should("include.text", "You can only access");
  });
});
