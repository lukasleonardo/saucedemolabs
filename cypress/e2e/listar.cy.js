/// <reference types="cypress" />
import '../support/commands'

describe('listar por:', () => {

  beforeEach('Visitando site e realizando login',()=>{
    cy.visit('https://saucedemo.com')
    cy.login('standard_user','secret_sauce')
  })

  it('Ordem alfabética ascendente (A-Z)', () => {
    cy.get('.inventory_item_name').each(($el,index,$list)=>{
      cy.log($el.text())
      if (index < $list.length - 1) {
        expect($el.text().localeCompare($list.eq(index + 1).text())).to.be.lessThan(0);
      }
  })
  })

  it('Ordem alfabética decrescente (Z-A)', () => {
    cy.getBySel('product_sort_container').select('za')
    cy.get('.inventory_item_name').each(($el,index,$list)=>{
      cy.log($el.text())
      if (index < $list.length - 1) {
        expect($el.text().localeCompare($list.eq(index + 1).text())).to.be.greaterThan(0);
      }
  })
  })

  it('Ordem do maior para menor preço', () => {
    let itemPrice
    let nextItemPrice
    cy.getBySel('product_sort_container').select('hilo')
    cy.get('.inventory_item_price').each(($el,index,$list)=>{
      itemPrice = parseFloat($el.text().slice(1))
      nextItemPrice =parseFloat($list.eq(index + 1).text().slice(1))
      cy.log(itemPrice)
      cy.log(nextItemPrice)
      if (index < $list.length - 1) {
        expect(itemPrice).to.be.gte(nextItemPrice);
      }
  })
  })

  it('Ordem do menor para o maior preço', () => {
    let itemPrice
    let nextItemPrice
    cy.getBySel('product_sort_container').select('lohi')
    cy.get('.inventory_item_price').each(($el,index,$list)=>{
      itemPrice = parseFloat($el.text().slice(1))
      nextItemPrice =parseFloat($list.eq(index + 1).text().slice(1))
      cy.log(itemPrice)
      cy.log(nextItemPrice)
      if (index < $list.length - 1) {
        expect(itemPrice).to.be.lte(nextItemPrice);
      }
  })
  })


  afterEach('Encerramento dos testes',()=>{
    cy.logout()
  })
})


