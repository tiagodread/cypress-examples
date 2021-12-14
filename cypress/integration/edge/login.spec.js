describe('Login Page', () => {
    it('should visit the login page', () => {
        cy.visit('https://console.stage.redhat.com/beta/edge/manage-images')
        cy.pause()
    });
});