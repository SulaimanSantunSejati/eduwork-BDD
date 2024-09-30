const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor'); 


// Test Case: Login
Given('I open login page', () => {
    cy.visit('http://zero.webappsecurity.com/login.html');
});

When('I submit login', () => {
    cy.get('#user_login').type('username');
    cy.get('#user_password').type('password');
    cy.contains('Sign in').click();
});

Then('I should see homepage', () => {
    cy.get('#account_summary_tab > a').should('be.visible');
});

// Test Case: Logout
Given('I am logged into the application', () => {
    cy.visit('http://zero.webappsecurity.com/login.html');
    cy.get('#user_login').type('username');
    cy.get('#user_password').type('password');
    cy.contains('Sign in').click();
    cy.get('#account_summary_tab > a').should('be.visible');
});

When('I click logout', () => {
    cy.get('.icon-user').click(); 
    cy.contains('Logout').click();
});

Then('I should be logged out and see the login page', () => {
    cy.url().should('include', 'index.html');
});

// Test Case: Invalid Login
When('I submit invalid login', () => {
    cy.get('#user_login').type('wrongUsername');
    cy.get('#user_password').type('wrongPassword');
    cy.contains('Sign in').click();
});

Then('I should see error message', () => {
    cy.get('.alert-error').should('contain', 'Login and/or password are wrong.');
});

// Test Case: Empty Credentials
When('I submit empty login', () => {
    cy.get('#user_login').clear();
    cy.get('#user_password').clear();
    cy.contains('Sign in').click();
});

Then('I should see validation message', () => {
  cy.get('.alert.alert-error').should('be.visible').and('contain.text', 'Login and/or password are wrong.')
});