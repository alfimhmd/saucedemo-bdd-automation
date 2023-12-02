class CheckoutCompletePage {
    /**
     * Define selectors using getter methods
     */
    get secondaryTitle() {
        return cy.get('#header_container > div.header_secondary_container > span');
    }

    get secondaryHeader() {
        return cy.get('h2');
    }

    /**
     * Ensures that the test is on the Checkout Complete page
     */
    ensureOnPage() {
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-complete.html');

        const title = 'CHECKOUT: COMPLETE!';
        this.secondaryTitle.should('have.text', title);

        const secHeader = 'THANK YOU FOR YOUR ORDER';
        this.secondaryHeader.should('have.text', secHeader);
    }

    /**
     * Clicks on the Back Home button
     */
    clickOnBackHome() {
        cy.get('[data-test="back-to-products"]').click();
    }
}

export default new CheckoutCompletePage();