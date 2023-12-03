// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('clickAddToCart', (itemName) => {
    cy.get('.inventory_item').contains(itemName).parent().parent().find('button').click();
});

Cypress.Commands.add('clickRemoveFromCart', (itemName) => {
    cy.get('.inventory_item').contains(itemName).parent().parent().find('button').click();
});

Cypress.Commands.add('verifyButtonChange', (itemName, expectedText) => {
    cy.get('.inventory_item').contains(itemName).parent().parent().find('button').should('have.text', expectedText);
});

Cypress.Commands.add('verifyCartBadge', (expectedCount) => {
    if (expectedCount === 'not visible') {
        cy.get('.shopping_cart_badge').should('not.exist');
    } else {
        cy.get('.shopping_cart_badge').should('have.text', expectedCount.toString());
    }
});
