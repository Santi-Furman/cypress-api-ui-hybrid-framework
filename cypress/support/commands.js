// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



Cypress.Commands.add('createUserApi', (userData) => {
  return cy.request({
    method: 'POST',
    url: 'https://jsonplaceholder.typicode.com/users',
    body: userData,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
});

// Custom Command para Login UI en SauceDemo con selectores directos
Cypress.Commands.add('login', (username = 'standard_user', password = 'secret_sauce') => {
  cy.visit('https://www.saucedemo.com/');
  cy.get('[data-test="username"]').type(username);
  cy.get('[data-test="password"]').type(password);
  cy.get('[data-test="login-button"]').click();
});