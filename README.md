
## Overview

This repository contains Cypress tests for a web application's cart functionality. It demonstrates the use of the Cypress testing framework along with the Page Object Model (POM) pattern to create maintainable and scalable end-to-end tests. The tests focus on adding items to a cart, verifying the number of items, and checking item prices dynamically.

## Features

- **Cypress Integration**: Utilizes Cypress for end-to-end testing.
- **Page Object Model (POM)**: Implements the POM pattern for better test maintenance.
- **Dynamic Data Handling**: Dynamically retrieves item prices and counts from the web page.
- **Custom Cypress Commands**: Includes custom Cypress commands for specific actions.
- **Gherkin Syntax**: Uses Gherkin syntax for readable scenario outlines.

## Setup

To get started with these tests:

1. Ensure you have [Node.js](https://nodejs.org/) installed.
2. Install Cypress via npm:
   ```bash
   npm install cypress --save-dev
   ```
3. Clone the repository and navigate to the project directory.
4. Run Cypress with:
   ```bash
   npx cypress open
   ```

## Structure

- `cypress/integration`: Contains test files written in Gherkin syntax.
- `cypress/fixtures`: Includes fixture files for dynamic data (e.g., item names).
- `cypress/support`: Stores the Page Object Model files and custom commands.

## Custom Commands

- `verifyButtonChange`: Verifies changes in button text based on item interactions.

## Page Objects

In this repository, POM is implemented for different pages of the web application, represented as classes:

- CartPage: Manages interactions with the cart page, such as adding items, checking item counts, and verifying total prices.
- InventoryPage: Handles functionalities on the product inventory page, like selecting items.
- CheckoutStep1Page and CheckoutStep2Page: Represent different steps in the checkout process.
- CheckoutCompletePage: Represents the final checkout completion page.
- LoginPage: Used for login page interactions.

Each of these classes is located in the cypress/support directory, under a sub-directory (e.g., @pages). They provide methods that correspond to the actions a user can perform on these pages.


### Benefits of POM
- Maintainability: Changes in the UI can be updated in one place, making the tests more maintainable.
- Reusability: Common page elements and functionalities are reusable across different test scripts.
- Readability: Tests become more readable and understandable, focusing on the workflow rather than low-level interactions.

## Testing Scenarios

- Adding multiple items to the cart.
- Verifying the number of items in the cart.
- Dynamically checking the total price of items in the cart.

## Running Tests

Execute the tests via the Cypress Test Runner:

```bash
npx cypress run
```

## Contributing

Contributions to enhance the testing scenarios or Page Object Models are welcome. Please adhere to the existing coding style and add unit tests for any new or changed functionality.
