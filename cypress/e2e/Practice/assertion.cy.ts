describe('Test Assertion', () => {
    beforeEach(() => {
        cy.visit("/commands/actions")
    });
    it('shows on active class for the current page', () => {
        cy.get('.dropdown-menu').find('li').eq(2).should("have.class", "active")
    });
    it.only('should not have an actve class on inactice pages', () => {
        cy.get('.dropdown-menu').find('li').first()
            .should("not.have.class", "active").find('a')
            .should('have.attr', 'href', '/commands/querying')
    });
});