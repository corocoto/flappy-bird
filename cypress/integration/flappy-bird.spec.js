/// <reference types="cypress" />

describe('flappy-bird application', () => {
  beforeEach(() => {
    cy.visit('/flappy-bird')
  })

  context('Main menu', () => {
    it('Click on the "Play" button should open the game scene', () => {
      cy.contains('Play').click()
      cy.url().should('equal', 'http://localhost:3000/game')
    });

    it('Click on the "Author" button should open the page with information about him' , () => {
      cy.contains('Author').click()
      cy.url().should('equal', 'http://localhost:3000/author')
    });
  })

  context('Game scene', () => {
    beforeEach(() => {
      cy.contains('Play').click()
    });
    it('Click on the "Back" button should return you into the main page', () => {
      cy.contains('Back').click()
      cy.url().should('equal', 'http://localhost:3000/flappy-bird')
    });
  });
});
