let itemPrices = {};

class CartPage {
    /**
     * Define selectors using getter methods
     */
    get secondaryTitle() {
        return cy.get('#header_container > div.header_secondary_container > span');
    }

    get cartIcon() {
        return cy.get('#shopping_cart_container');
    }

    get itemCount() {
        return cy.get('.shopping_cart_badge');
    }

    get checkoutButton() {
        return cy.get('#checkout');
    }

    get continueShoppingButton() {
        return cy.get('#continue-shopping');
    }

    /**
     * Ensures that the test is on the Cart page
     */
    ensureOnPage() {
        cy.url().should('eq', 'https://www.saucedemo.com/cart.html');
        const title = 'Your Cart';
        this.secondaryTitle.should('have.text', title);
    }

    /**
     * Clicks on the cart icon
     */
    clickOnCartIcon() {
        this.cartIcon.click();
    }

    /**
     * Checks the number of items in the cart
     */
    checkNumCartItems(expectedNum) {
        if (expectedNum === 0) {
            this.itemCount.should('not.exist');
        } else {
            this.itemCount.should('have.text', String(expectedNum));
        }
    }

    /**
     * Clicks on the checkout button
     */
    clickOnCheckout() {
        this.checkoutButton.click();
    }

    /**
     * Clicks on the continue shopping button
     */
    clickOnContinueShopping() {
        this.continueShoppingButton.click();
    }

    /**
     * Adds an item to the cart
     */
    addItemToCart(itemName) {
        cy.contains('.inventory_item', itemName).within(() => {
            cy.get('.inventory_item_price').invoke('text').then(priceText => {
                // Extract the numeric value from the price text and store it
                const price = parseFloat(priceText.replace(/^\$/, ''));
                itemPrices[itemName] = price;
            });
            cy.get('.btn_inventory').contains('Add to cart').click();
        });
    }

    calculateTotalPrice() {
        return Object.values(itemPrices).reduce((total, price) => total + price, 0).toFixed(2);
    }

    checkTotalPrice(expectedPrice) {
        // This method should locate the element that displays the total price
        // and assert that its text matches the expectedPrice
        cy.get('.inventory_item_price').should('have.text', expectedPrice);
    }

    /**
     * Removes an item from the cart
     */
    removeItemFromCart(itemId) {
        cy.get(itemId).click();
    }
}

export default new CartPage();
