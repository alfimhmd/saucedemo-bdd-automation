import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
import CartPage from "@pages/CartPage";
import CheckoutCompletePage from "@pages/CheckoutCompletePage";
import CheckoutStep1Page from "@pages/CheckoutStep1Page";
import CheckoutStep2Page from "@pages/CheckoutStep2Page";
import InventoryPage from "@pages/InventoryPage";

let itemsData;

Given('I have clicked the "Add to cart" button for {string}', (itemName) => {
    cy.clickAddToCart(itemName);
});

Then('the selected {string} should change to {string} button', (itemName, buttonText) => {
    cy.verifyButtonChange(itemName, buttonText);
});

When('the cart badge should display {string}', (itemCount) => {
    cy.verifyCartBadge(itemCount);
});

When('I click the {string} button for {string}', (buttonText, itemName) => {
    if (buttonText === 'Remove') {
        cy.clickRemoveFromCart(itemName);
    } else {
        cy.log('none')
    }
});

Then('the button should change to {string}', (expectedText) => {
    // Assuming the last interacted item's name is stored in a variable or context
    const lastInteractedItem = 'Add to cart'; // Replace with the actual logic to get the item name

    InventoryPage.verifyButtonChangeTo(lastInteractedItem, expectedText);
});

Given('I have added the following items to the cart', dataTable => {
    cy.fixture('items.json').then((data) => {
        itemsData = data.items; // Store the fixture data in a variable
        dataTable.hashes().forEach(row => {
            const itemName = itemsData.find(name => name === row.Item);
            if (itemName) {
                InventoryPage.addItemToCart(itemName);
            } else {
                throw new Error(`Item ${row.Item} not found in fixture data`);
            }
        });
    });
});

When('I click on the cart icon', () => {
    CartPage.clickOnCartIcon();
});

Then('the cart should list {string} items', expectedCount => {
    CartPage.checkNumCartItems(parseInt(expectedCount, 10));
});

Then('I fill the customer info', () => {
    CartPage.clickOnCheckout();
    CheckoutStep1Page.fillInCustomerInfo("Jane", "Doe", "90210");
    CheckoutStep1Page.clickOnContinue();
})


Then('the total price should be calculated correctly', () => {
    const expectedTotalPrice = CartPage.calculateTotalPrice();
    CartPage.checkTotalPrice(`$${expectedTotalPrice}`);
});
