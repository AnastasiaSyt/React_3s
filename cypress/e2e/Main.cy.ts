/// <reference types="cypress" />

  describe('SearchBar testing', () => {
    it('should allow typing text', () => {
      cy.visit('/');
      cy.get('.search_input')
        .type('Hello, World!')
        .should('have.value', 'Hello, World!');
    });
    afterEach(() => {
        cy.window().trigger('unload');
    });
  });
  