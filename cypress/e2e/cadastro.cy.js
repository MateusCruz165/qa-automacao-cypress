describe('Cadastro de Usuário', () => {

  beforeEach(() => {
    cy.visit('/register')
  })

  it('deve cadastrar usuário com dados válidos', () => {
    cy.get('#user').type('Mateus Teste')
    cy.get('#email').type(`mateus.${Date.now()}@teste.com`)
    cy.get('#password').type('123456')
    cy.get('#confirmPassword').type('123456')
    cy.get('#btnRegister').click()
    cy.contains('Cadastro realizado').should('be.visible')
  })

  it('deve bloquear cadastro com e-mail inválido', () => {
    cy.get('#user').type('Mateus Teste')
    cy.get('#email').type('emailinvalido')
    cy.get('#password').type('123456')
    cy.get('#confirmPassword').type('123456')
    cy.get('#btnRegister').click()
    cy.contains('E-mail inválido').should('be.visible')
  })

  it('deve bloquear quando senhas não conferem', () => {
    cy.get('#user').type('Mateus Teste')
    cy.get('#email').type('mateus@teste.com')
    cy.get('#password').type('123456')
    cy.get('#confirmPassword').type('654321')
    cy.get('#btnRegister').click()
    cy.contains('As senhas não conferem').should('be.visible')
  })

  it('deve bloquear campos obrigatórios em branco', () => {
    cy.get('#btnRegister').click()
    cy.contains('Campo obrigatório').should('be.visible')
  })

})
