class CheckoutStep1Page {
    /**
     * Define selectors using getter methods
     */
    get secondaryTitle() {
        return cy.get('#header_container > div.header_secondary_container > span');
    }

    get firstName() {
        return cy.get('input[data-test="firstName"]');
    }

    get lastName() {
        return cy.get('input[data-test="lastName"]');
    }

    get postalCode() {
        return cy.get('input[data-test="postalCode"]');
    }

    /**
     * Ensures that the test is on the Checkout Step 1 page
     */
    ensureOnPage() {
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-one.html');
        const title = 'Checkout: Your Information';
        this.secondaryTitle.should('have.text', title);
    }

    /**
     * Fills in the customer information
     */
    fillInCustomerInfo(first_name, last_name, postal_code) {
        this.firstName.type(first_name);
        this.lastName.type(last_name);
        this.postalCode.type(postal_code);
    }

    /**
     * Validates that the customer sees an error
     */
    validateCustomerSeesError() {
        cy.get('[data-test="error"]').should('be.visible');
    }

    /**
     * Clicks on the Continue button
     */
    clickOnContinue() {
        cy.get('input[type="submit"]').click();
    }

    /**
     * Clicks on the Cancel button
     */
    clickOnCancel() {
        cy.get('#cancel').click();
    }
}

export default new CheckoutStep1Page();