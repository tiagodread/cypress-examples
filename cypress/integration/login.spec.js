describe('Login Page', () => {
    it('should visit the login page', () => {
        cy.visit('/login')
        cy.get('#rh-login-container').should('be.visible')
    });
});