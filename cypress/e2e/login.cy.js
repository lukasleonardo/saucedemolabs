import '../support/commands'


describe('autenticação', () => {
  const user = 'standard_user'
  const password = 'secret_sauce'
  beforeEach('Open saucedemo',()=>{
    cy.visit('https://saucedemo.com')
    cy.get("[data-test='username']").as('loginField')
    cy.get("[data-test='password']").as('passwordField')

  })

  it('Login válido com botão login',()=>{
    cy.get('@loginField').type(user)
    cy.get('@passwordField').type(password)
    cy.get("[data-test='login-button']").click()

    cy.get('span.title').should('have.text','Products')
    cy.logout()
  })

  it('Login válido iniciado com enter',()=>{
    cy.get('@loginField').type(user)
    cy.get('@passwordField').type(`${password}{enter}`)

    cy.get('span.title').should('have.text','Products')
    cy.logout()
  })



  it('Login Inválido',()=>{
    cy.get('@loginField').type(user).should('have.value',user)
    cy.get('@passwordField').type('secret_sa').should('have.value','secret_sa')
    cy.get("[data-test='login-button']").click()

    cy.getBySel('error').should('have.text','Epic sadface: Username and password do not match any user in this service')
  })

  
})
