describe('page Form testing', () => {
    it('the form can be filled', () => {
      cy.visit('/form');
      cy.get('form');

      cy.get('input[name="title"]')
        .type('This is my testing title')
        .should('have.value', 'This is my testing title');

      cy.get('input[name="date"]').type('1999-12-31');

      cy.get('select').select('Elizabeth Slavin').should('have.value', 'Elizabeth Slavin');

      cy.get('[type="checkbox"]').check();

      cy.get('[type="radio"]').check('../eric.png');

      cy.get('input[type=file]').selectFile('./src/assets/3.jpg');
    });
    afterEach(() => {
        cy.window().trigger('unload');
    });
  });