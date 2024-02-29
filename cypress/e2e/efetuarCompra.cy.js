import '../support/commands'

describe('Efetuar compra', () => {

  beforeEach('Visitando site e realizando login',()=>{
    cy.visit('https://saucedemo.com')
    cy.login('standard_user','secret_sauce')
  })
  it('Efetuando compra', () => {
    // selecting items
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('have.id','remove-sauce-labs-backpack')
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="remove-sauce-labs-bike-light"]').should('have.id','remove-sauce-labs-bike-light')
    //entering Cart - asserting items number
    cy.get('span.shopping_cart_badge').should('have.text','2')
    cy.get('a.shopping_cart_link').click()
    //Cart
    cy.get('span.title').should('have.text','Your Cart')
    cy.get("[data-test='checkout']").click()
    //your information
    cy.get('span.title').should('have.text','Checkout: Your Information')
    cy.checkout('fulano','silva','24901700')
    // Overview
    cy.get('span.title').should('have.text','Checkout: Overview')
    cy.get('.summary_total_label').should('be.visible')
    cy.getBySel('finish').click()
    // Complete page
    cy.get('h2.complete-header').should('have.text','Thank you for your order!')
    cy.get('img.pony_express').should('be.visible')
  })

  it('Cancel item', ()=>{
    // selecting items
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('have.id','remove-sauce-labs-backpack')

    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="remove-sauce-labs-bike-light"]').should('have.id','remove-sauce-labs-bike-light')
  })

  afterEach('Closing tests',()=>{
    cy.logout()
  })
})


//https://example.cypress.io
