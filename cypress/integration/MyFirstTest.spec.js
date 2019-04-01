/// <reference types="Cypress" />

describe('test end-to-end tests', () => {

  it('button color in switcher changing color on click', () => {
    cy.visit('http://localhost:8080');
    const btnTitle = '[value="title"]';
    const btnGenre = '[value="genre"]';

    cy.get(btnTitle)
      .should('have.class', 'button-active');

    cy.get(btnGenre)
      .should('have.class', 'button-inactive')
      .click()
      .should('have.class', 'button-active')
      .should('not.have.class', 'button-inactive');

    cy.get(btnTitle)
      .should('have.class', 'button-inactive')
      .should('not.have.class', 'button-active');
  });

});