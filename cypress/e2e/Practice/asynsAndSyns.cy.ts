describe('Test with Plugins', () => {
    beforeEach(() => {
        cy.visit("/commands/actions")
    });
    it('Type into E-mail Filed', () => {
        cy.findByPlaceholderText('Email').type('test@gmail.com')
        cy.wait(5000)
        console.log("test is finished")
        cy.log("Hi log from Cy. commands")
    });
    it.only('Type into E-mail Filed with Async Promises', () => {
        cy.findByPlaceholderText('Email').type('test@gmail.com')
        cy.wait(2000).then(() => {
            console.log("test is finished")
            fetch('https://api.spacexdata.com/v3/missions')
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                })
        })

    });
});