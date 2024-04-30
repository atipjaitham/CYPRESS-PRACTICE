describe('My frist test', () => {
    beforeEach('', () => {
        cy.visit('https://example.cypress.io/commands/actions')
    });
    it('has an h1 on ther page', () => {
        cy.get("h1").should("exist")
    });
    it('Correct h1 text', () => {
        cy.get("h1").contains("Actions")
    });
    it('Correct paragraph under h1', () => {
        cy.get(".container").eq(1).find('p').should("exist")
    });
    it('Correct section elements', () => {
        cy.get(".container").eq(2).within(() => {
            cy.get("h4").should("exist")
            cy.get('p').should("exist")
        })
        cy.get("#type").should("exist")

    });
});