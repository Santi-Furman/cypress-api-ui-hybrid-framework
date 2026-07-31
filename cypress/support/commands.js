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

Cypress.Commands.add('loginByCookie', (username = 'standard_user') => {
  // En lugar de escribir en el formulario, seteamos la cookie de sesión directamente
  cy.setCookie('session-username', username);
});