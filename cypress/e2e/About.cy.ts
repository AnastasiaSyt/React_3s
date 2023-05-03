describe('About testing', () => {
    it('should have title About', () => {
      cy.visit('/about');
      cy.contains('About');
    });
    afterEach(() => {
        cy.window().trigger('unload');
    });
  });