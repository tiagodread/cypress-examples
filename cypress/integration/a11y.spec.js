describe('Accessibility tests suite', () => {
    context('public pages', () => {


        it('should has no violation on load of', function () {
            cy.visit('/')
            cy.checkA11y()
        });
    })
})