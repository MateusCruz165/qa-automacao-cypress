describe('Login', () => {

  beforeEach(() => {
    cy.visit('/login')
  })

  it('deve fazer login com credenciais válidas', () => {
    cy.get('#user').type('teste@teste.com')
    cy.get('#password').type('123456')
    cy.get('#btnLogin').click()
    cy.url().should('not.include', '/login')
  })

  it('deve exibir erro com senha incorreta', () => {
    cy.get('#user').type('teste@teste.com')
    cy.get('#password').type('senhaerrada')
    cy.get('#btnLogin').click()
    cy.contains('Usuário ou senha inválidos').should('be.visible')
  })

  it('deve exibir erro com campos em branco', () => {
    cy.get('#btnLogin').click()
    cy.contains('Informe o e-mail').should('be.visible')
  })

  it('deve exibir erro com e-mail inválido', () => {
    cy.get('#user').type('emailsemarroba')
    cy.get('#password').type('123456')
    cy.get('#btnLogin').click()
    cy.contains('E-mail inválido').should('be.visible')
  })

})
