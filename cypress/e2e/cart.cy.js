/// <reference types="cypress" />
import '../support/commands'

describe('Carrinho de compras',()=>{
  beforeEach('Visitando site e realizando login', ()=>{
    cy.visit('https://saucedemo.com')
    cy.login('standard_user','secret_sauce')
  })

  it('Removendo item do carrinho',()=>{
    //adicionando items
    cy.getBySel('add-to-cart-sauce-labs-backpack').click()
    cy.getBySel('remove-sauce-labs-backpack').should('have.id','remove-sauce-labs-backpack')
    cy.getBySel('add-to-cart-sauce-labs-bike-light').click()
    cy.getBySel('remove-sauce-labs-bike-light').should('have.id','remove-sauce-labs-bike-light')
    cy.getBySel('add-to-cart-sauce-labs-bolt-t-shirt').click()
    cy.getBySel('remove-sauce-labs-bolt-t-shirt').should('have.id','remove-sauce-labs-bolt-t-shirt')
    cy.getBySel('add-to-cart-sauce-labs-fleece-jacket').click()
    cy.getBySel('remove-sauce-labs-fleece-jacket').should('have.id','remove-sauce-labs-fleece-jacket')
    cy.getBySel('add-to-cart-sauce-labs-onesie').click()
    cy.getBySel('remove-sauce-labs-onesie').should('have.id','remove-sauce-labs-onesie')
    // verificando cart label
    cy.get('span.shopping_cart_badge').should('have.text','5')
    cy.get('a.shopping_cart_link').click()
    // item list
    cy.get('div.cart_list').get('.cart_item').should('have.length.above', 3)

    cy.getBySel('remove-sauce-labs-backpack').click()
    cy.getBySel('remove-sauce-labs-bike-light').click()
    cy.get('div.cart_list').get('.cart_item').should('have.length.above', 2)
  })



  afterEach('Encerrando testes',()=>{
    cy.logout()
  })
})