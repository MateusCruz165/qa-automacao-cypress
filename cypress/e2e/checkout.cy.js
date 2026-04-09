describe('Checkout', () => {

  beforeEach(() => {
    // Login antes de cada teste
    cy.visit('/login')
    cy.get('#user').type('teste@teste.com')
    cy.get('#password').type('123456')
    cy.get('#btnLogin').click()
  })

  it('deve adicionar produto ao carrinho', () => {
    cy.visit('/')
    cy.get('.product-item').first().click()
    cy.get('#btnAddCart').click()
    cy.contains('Produto adicionado').should('be.visible')
  })

  it('deve exibir produto no carrinho', () => {
    cy.visit('/cart')
    cy.get('.cart-item').should('have.length.at.least', 1)
  })

  it('deve completar o checkout com dados válidos', () => {
    cy.visit('/checkout-one')
    cy.get('#name').type('Mateus Teste')
    cy.get('#email').type('teste@teste.com')
    cy.get('#cardNumber').type('4111111111111111')
    cy.get('#cardExpiry').type('12/26')
    cy.get('#cardCvv').type('123')
    cy.get('#btnFinish').click()
    cy.contains('Pedido realizado').should('be.visible')
  })

  it('deve bloquear checkout com campos em branco', () => {
    cy.visit('/checkout-one')
    cy.get('#btnFinish').click()
    cy.contains('Campo obrigatório').should('be.visible')
  })

})
