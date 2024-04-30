describe('Test with Fixture', () => {
    beforeEach(() => {
        cy.fixture<string>('example')
            .then((data) => {
                cy.wrap(data).as('testData');
            });
    });
    it('Use fixture data in a network request', () => {
        type FixtureData = { [key: string]: unknown };
        cy.visit('/commands/network-requests');
        cy.fixture<FixtureData>('example')
            .then(() => {
                cy.intercept('GET', '**/comments/*', this.data).as('getComment')
                cy.get('.network-btn').click()
                cy.wait('@getComment').then((res) => {
                    cy.log(`Response : ${res}`)
                })
            });
    });

    it('Pull data from a fixture', () => {
        cy.fixture("example").then((data) => {
            cy.log('DATA: ', data)
        })
    });

    it('Update Fixture data inline', () => {
        cy.fixture('example').then((data) => {
            data.email = "updated@gamil.com"
            cy.log(data.email)
        })
    });
});