
describe('test login page for saucedemo website', () => {
  it('should vist the saucedemo website and logs in', () => {
    
    //go to saucedemo webpage and check that url is correct
    cy.visit('https://www.saucedemo.com/')
    cy.url().should('include', 'saucedemo')

    //select username field and type in username
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="username"]').should('have.value', 'standard_user')
    

    // select password field and type in password
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="password"]').should('have.value', 'secret_sauce')

    // click on "login" button and check url
    cy.get('[id=login-button]').click()
    cy.url().should('include', '/inventory')
  })

  it('should display correct error message if username incorrect', () => {
    
    //go to saucedemo webpage and check that url is correct
    cy.visit('https://www.saucedemo.com/')
    cy.url().should('include', 'saucedemo')

    //select username field and type in INCORRECT username
    cy.get('[data-test="username"]').type('testuser123')
    cy.get('[data-test="username"]').should('have.value', 'testuser123')
    
    // select password field and type in password
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="password"]').should('have.value', 'secret_sauce')

    // click on "login" button and check error message
    cy.get('[id=login-button]').click()
    cy.get('[data-test="error"]').should('include.text', `Epic sadface: Username`)

    // click on "x" on error message to clear
    cy.get('.error-button > .svg-inline--fa').click()
    
  });
})