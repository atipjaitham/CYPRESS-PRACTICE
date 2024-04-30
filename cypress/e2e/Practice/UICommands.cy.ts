describe('Test on UI Conmmands', () => {
    beforeEach(() => {
        cy.visit("/commands/actions")
    });
    it.skip('links to the actions page correctly', () => {
        cy.findAllByText("Actions").first().click()
        cy.url().should("include", "commands/actions")
    });
    it.skip('links to the actions page by navbar correctly', () => {
        cy.findAllByText("Actions").first().click({ force: true })
        cy.url().should("include", "commands/actions")
    });
    it('lets you type in an input field', () => {
        cy.findByPlaceholderText('Email').type('test@gmail.com').should("have.value", "test@gmail.com")
    });
    it('lets you clear an input field', () => {
        cy.findByLabelText('Describe:').type('Test description').should('have.value', 'Test description').clear().should("have.value", "")
    });
    it.only('lets you checked a checkbox', () => {
        cy.get('.action-checkboxes [type="checkbox"]').eq(1).check({ force: true }).should("be.checked")
    });
});