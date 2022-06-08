const getElement = (identifier) => cy.get(identifier)
const DUMMY_MOBILE_NUMBER = "9619836216";

context('Actions', () => {
    beforeEach(() => {
        cy.visit()

})

describe('loginTest',  () => {

    it('To verify login functionality with valid mobile number', () => {
        getElement("#loginForm > div > input[type=tel]").type(DUMMY_MOBILE_NUMBER)
        getElement("#signinbutton").click()
        cy.url().should('include', '/transactions')

     })
})
})