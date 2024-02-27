
describe('test login page for saucedemo website', () => {
  it('vists the saucedemo website', () => {
    
    //go to saucedemo webpage and check that url is correct
    cy.visit('https://www.saucedemo.com/')
    cy.url().should('include', 'saucedemo')

    //select username field and type in username
    cy.get('[data-test="username"]').type('standard_user')

    // select password field and type in password
    cy.get('[data-test="password"]').type('secret_sauce')

    // click on "login" button
    
  })
})