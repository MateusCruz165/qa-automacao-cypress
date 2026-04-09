# 🤖 QA — Automação com Cypress

Projeto de automação de testes E2E com Cypress, cobrindo fluxos críticos de uma aplicação web: login, cadastro de usuário e checkout.

---

## 🧪 Cobertura de Testes

| Arquivo | Fluxo | Cenários |
|---------|-------|----------|
| `login.cy.js` | Autenticação | 4 |
| `cadastro.cy.js` | Cadastro de usuário | 4 |
| `checkout.cy.js` | Fluxo de compra | 4 |

---

## 📁 Estrutura do Projeto

```
qa-automacao-cypress/
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js
│   │   ├── cadastro.cy.js
│   │   └── checkout.cy.js
│   ├── fixtures/
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── cypress.config.js
├── package.json
└── README.md
```

---

## 🚀 Como executar

### Pré-requisitos
- Node.js instalado
- npm instalado

### Instalação
```bash
npm install
```

### Executar com interface gráfica
```bash
npx cypress open
```

### Executar em modo headless (terminal)
```bash
npx cypress run
```

---

## 🛠️ Tecnologias

- **Cypress** v15
- **JavaScript**
- **Node.js**

---

## 🌐 Aplicação testada

[automationpratice.com.br](https://automationpratice.com.br) — ambiente de prática para QA.

---

## 👤 Autor

**Mateus Alves da Cruz**
Analista de QA | Pinhais, PR

[![LinkedIn](https://img.shields.io/badge/LinkedIn-mateus--cruz10-blue?logo=linkedin)](https://www.linkedin.com/in/mateus-cruz10)
