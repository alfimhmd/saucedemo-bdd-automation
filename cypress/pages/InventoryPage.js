class InventoryPage {
    get secondaryTitle() {
        return cy.get('#header_container > div.header_secondary_container > span');
    }

    get productSortDropdown() {
        return cy.get('.product_sort_container', {force: true});
    }

    ensureOnPage() {
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
        const title = 'Products';
        this.secondaryTitle.should('have.text', title);
    }

    ensureProductSortDropdownIsVisible() {
        this.productSortDropdown
            .should('exist')
            .and('be.visible');
    }

    selectProductOptionAndVerify(options) {
        cy.get('.product_sort_container').select(options[0]); // Use .select() to open the dropdown
      }

    getAllProductDetails() {
        return cy.get('.inventory_item').then($items => {
            return Cypress._.map($items, (item) => {
                const name = item.querySelector('.inventory_item_name').innerText.trim();
                const price = parseFloat(item.querySelector('.inventory_item_price').innerText.replace('$', ''));
                return { name, price };
            });
        });
    }
    
    verifyProductsSortedByName(sortOrder) {
        this.getAllProductDetails().then(products => {
            let sortedProducts = Cypress._.sortBy(products, 'name');
            if (sortOrder === 'reverse alphabetical') {
                sortedProducts = Cypress._.reverse(sortedProducts);
            }
    
            products.forEach((product, index) => {
                cy.get('.inventory_item').eq(index).scrollIntoView({ easing: 'linear', duration: 500 }).within(() => {
                    cy.get('.inventory_item_name').should('have.text', sortedProducts[index].name);
                });
            });
        });
    }    
    
    verifyProductsSortedByPrice(sortOrder) {
        this.getAllProductDetails().then(products => {
            let sortedProducts;
            if (sortOrder === 'ascending price') {
                sortedProducts = Cypress._.orderBy(products, ['price', 'name'], ['asc', 'asc']);
            } else if (sortOrder === 'descending price') {
                sortedProducts = Cypress._.orderBy(products, ['price', 'name'], ['desc', 'asc']);
            }
    
            products.forEach((product, index) => {
                cy.get('.inventory_item').eq(index).scrollIntoView({ easing: 'linear', duration: 500 }).within(() => {
                    cy.get('.inventory_item_name').should('have.text', sortedProducts[index].name);
                    cy.get('.inventory_item_price').should('contain', sortedProducts[index].price.toFixed(2));
                });
            });
        });
    }          

    verifyProductsSortedByOrder(sortOrder) {
        if (sortOrder === 'alphabetical' || sortOrder === 'reverse alphabetical') {
            this.verifyProductsSortedByName(sortOrder);
        } else if (sortOrder === 'ascending price' || sortOrder === 'descending price') {
            this.verifyProductsSortedByPrice(sortOrder);
        } else {
            // If sortOrder does not match any expected value, throw an error
            throw new Error(`Invalid sort order: ${sortOrder}`);
        }
    }    


}
export default new InventoryPage();