 // Analytics.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

context('Actions-page-inicial', () => {
  beforeEach(() => {
    cy.visit('https://matheus-nb.github.io/GitPageForAnalytics/')
  })

  it('.click() - click into a DOM element', () => {
    cy.get('.btn-1').click()
  })

  it('.click() - click into a DOM element', () => {
    cy.get('.btn-2').click()
  })

  it('.click() - click into a DOM element', () => {
    cy.get('.btn-3').click()
  })

  it('.click() - click into a DOM element', () => {
    cy.get('.btn-4').click()
  })

  it('.click() - click into a DOM element', () => {
    cy.get('.btn-5').click()
  })

  it('.click() - click into a DOM element', () => {
    cy.get('#btn-6').click()
  })

  it('.click() - click into a DOM element', () => {
    cy.get('#btn-7').click()
  })

  it('.click() - click into a DOM element', () => {
    cy.get('#btn-8').click()
  })

  it('.click() - click into a DOM element', () => {
    cy.get('#btn-9').click()
  })

  it('.click() - click into a DOM element', () => {
    cy.get('#btn-10').click()
  })
})

context('Actions-page-ideias', () => {
  beforeEach(() => {
    cy.visit('https://matheus-nb.github.io/GitPageForAnalytics/ideias.html')
  })

  it('.click() - click into a DOM element', () => {
    cy.get('.btn-1').click()
  })

  it('.click() - click into a DOM element', () => {
    cy.get('.btn-2').click()
  })

  it('.click() - click into a DOM element', () => {
    cy.get('.btn-3').click()
  })

  it('.click() - click into a DOM element', () => {
    cy.get('.btn-4').click()
  })

  it('.click() - click into a DOM element', () => {
    cy.get('.btn-5').click()
  })

  it('.click() - click into a DOM element', () => {
    cy.get('.btn-6').click()
  })

  it('.click() - click into a DOM element', () => {
    cy.get('.btn-7').click()
  })

  it('.click() - click into a DOM element', () => {
    cy.get('.btn-8').click()
  })
})


context('Actions-page-ideiaDaSemana', () => {
  beforeEach(() => {
    cy.visit('https://matheus-nb.github.io/GitPageForAnalytics/IdeiaDaSemana.html')
  })

  it('.click() - click into a DOM element', () => {
    cy.get('.btn-1').click()
  })

  it('.click() - click into a DOM element', () => {
    cy.get('.btn-2').click()
  })

  it('.click() - click into a DOM element', () => {
    cy.get('.btn-3').click()
  })

  it('.click() - click into a DOM element', () => {
    cy.get('.btn-4').click()
  })

  it('.click() - click into a DOM element', () => {
    cy.get('.btn-5').click()
  })

  it('.click() - click into a DOM element', () => {
    cy.get('.btn-6').click()
  })
})

context('Actions-page-addIdeia', () => {
  beforeEach(() => {
    cy.visit('https://matheus-nb.github.io/GitPageForAnalytics/ideiasNew.html')
  })

  it('.click() - click into a DOM element', () => {
    cy.get('.btn-1').click()
  })

  it('.click() - click into a DOM element', () => {
    cy.get('.btn-2').click()
  })

  it('.click() - click into a DOM element', () => {
    cy.get('.btn-3').click()
  })

  it('.click() - click into a DOM element', () => {
    cy.get('.btn-4').click()
  })

  it('.click() - click into a DOM element', () => {
    cy.get('.btn-5').click()
  })

  it('.click() - click into a DOM element', () => {
    cy.get('.btn-6').click()
  })

  it('.click() - click into a DOM element', () => {
    cy.get('.btn-7').click()
  })

  it('.type() - type into a DOM element', () => {
    // https://on.cypress.io/type
    cy.get('.title')
      .type('fake')

    cy.get('.category')
      .type('fake')

    cy.get('.image')
      .type('https://matheus-nb.github.io/GitPageForAnalytics/ideiasNew.html')

    cy.get('.description')
      .type('fake')

    cy.get('.url')
      .type('https://matheus-nb.github.io/GitPageForAnalytics/ideiasNew.html')


    cy.get('.btn-7').click()
  })
})

context('Actions-page-contato', () => {
  beforeEach(() => {
    cy.visit('https://matheus-nb.github.io/GitPageForAnalytics/contato.html')
  })

  it('.click() - click into a DOM element', () => {
    cy.get('.btn-1').click()
  })

  it('.click() - click into a DOM element', () => {
    cy.get('.btn-2').click()
  })

  it('.click() - click into a DOM element', () => {
    cy.get('.btn-3').click()
  })

  it('.click() - click into a DOM element', () => {
    cy.get('.btn-4').click()
  })

  it('.click() - click into a DOM element', () => {
    cy.get('.btn-5').click()
  })

  it('.click() - click into a DOM element', () => {
    cy.get('.btn-6').click()
  })

  it('.click() - click into a DOM element', () => {
    cy.get('.btn-7').click()
  })

  it('.type() - type into a DOM element', () => {
    cy.get('.title')
      .type('fake')

    cy.get('.category')
      .type('fake')

    cy.get('.description')
      .type('fake')

    cy.get('.url')
      .type('https://matheus-nb.github.io/GitPageForAnalytics/ideiasNew.html')

    cy.get('.btn-7').click()
  })
})

context('Actions-page-avaliacao', () => {
  beforeEach(() => {
    cy.visit('https://matheus-nb.github.io/GitPageForAnalytics/Avaliacao.html')
  })

  it('.click() - click into a DOM element', () => {
    cy.get('.btn-1').click()
  })

  it('.click() - click into a DOM element', () => {
    cy.get('.btn-2').click()
  })

  it('.click() - click into a DOM element', () => {
    cy.get('.btn-3').click()
  })

  it('.click() - click into a DOM element', () => {
    cy.get('.btn-4').click()
  })

  it('.click() - click into a DOM element', () => {
    cy.get('.btn-5').click()
  })

  it('.click() - click into a DOM element', () => {
    cy.get('.btn-6').click()
  })

  it('.click() - click into a DOM element', () => {
    cy.get('.btn-7').click()
  })

  it('.click() - click into a DOM element', () => {
    cy.get('.btn-8').click()
  })

  it('.click() - click into a DOM element', () => {
    cy.get('.btn-9').click()
  })

  it('.click() - click into a DOM element', () => {
    cy.get('.btn-10').click()
  })

  it('.click() - click into a DOM element', () => {
    cy.get('.ratingButton').click()
  })
})
