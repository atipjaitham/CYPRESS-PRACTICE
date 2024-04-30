describe('Test Cypress Hooks', () => {
    before(() => {
        cy.request('https://api.spacexdata.com/v3/missions').its('body').should('have.length', 10)
    });
    beforeEach(() => {
        cy.visit("/")
    });
    it('visti the home page', () => {
        cy.visit("/")
    });
    it('has an h1 on page', () => {
        cy.visit("/")
        cy.get('h1').should('exist')
    });
    it('renders the correct h1 text', () => {
        cy.visit("/")
        cy.get('h1').should('contain.text', "Kitchen Sink")
    });

});