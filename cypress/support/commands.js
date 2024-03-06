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

Cypress.Commands.add('login',(user,password)=>{
  cy.get("[data-test='username']").type(user)
  cy.get("[data-test='password']").type(password)
  cy.get("[data-test='login-button']").click()
})

Cypress.Commands.add('checkout',(fName,lName,postal)=>{
  cy.get("[data-test='firstName']").type(fName)
  cy.get("[data-test='lastName']").type(lName)
  cy.get("[data-test='postalCode']").type(postal)
  cy.get("[data-test='continue']").click()
})

Cypress.Commands.add('logout', ()=>{
  cy.get("#react-burger-menu-btn").click()
  cy.get("#reset_sidebar_link").click()
  cy.reload()
  cy.get("#react-burger-menu-btn").click()
  cy.get("#logout_sidebar_link").click()
})

Cypress.Commands.add('getBySel', (selector, ...args) => {
  return cy.get(`[data-test="${selector}"]`, ...args)
})


//15450759871