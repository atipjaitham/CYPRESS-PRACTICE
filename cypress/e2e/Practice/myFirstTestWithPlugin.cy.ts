const navbarText = Cypress.env('navbarText')
describe('Test with Plugins', () => {
    beforeEach(() => {
        cy.visit("/")
    });
    it('correctly renders the cypress website link', () => {
        cy.findByText(navbarText).should('exist')
    });
});