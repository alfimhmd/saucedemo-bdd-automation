class CheckoutStep2Page {
    /**
     * Define selectors using getter methods
     */
    get secondaryTitle() {
        return cy.get('#header_container > div.header_secondary_container > span');
    }

    /**
     * Ensures that the test is on the Checkout Step 2 page
     */
    ensureOnPage() {
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-two.html');
        const title = 'CHECKOUT: OVERVIEW';
        this.secondaryTitle.should('have.text', title);
    }

    /**
     * Clicks on the Finish button
     */
    clickOnFinish() {
        cy.get('[data-test="finish"]').click();
    }

    /**
     * Clicks on the Cancel button
     */
    clickOnCancel2() {
        cy.get('[data-test="cancel"]').click();
    }

    /**
     * Checks items on Checkout Step 2 page match those in the cart
     * To be implemented based on specific requirements
     */
    checkItemsOnCheckoutStep2PageMatchCart() {
        // Implementation depends on how items are displayed and validated
        // Example: cy.get('.cart_item').should('have.length', expectedNumberOfItems);
    }
}

export default new CheckoutStep2Page();
