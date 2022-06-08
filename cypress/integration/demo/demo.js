describe('My First Test', () => {
    it('Does not do much!', () => {
        cy.visit("https://test.instacred.me/internal-testing/new-activation-flow.jsp");
        cy.get("#mobile").type("7709683885");
        cy.window().then((win) => {
            cy.stub(win, 'open', url => {
                win.location.href = 'https://the-internet.herokuapp.com/';
            }).as("popup")
        })
        cy.get("#IDFC").click();
        cy.get("button:contains('Continue')").click();
        cy.get("a:contains('Start Inline Registration')").invoke('removeAttr', 'target').click();
    })
})