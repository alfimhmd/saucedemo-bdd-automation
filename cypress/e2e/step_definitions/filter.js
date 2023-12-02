import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
import InventoryPage from "@pages/InventoryPage";

  Given("I am on the product page", () => {
    InventoryPage.ensureOnPage()
  })

  Then("I should see a dropdown for product sorting", () => {
    InventoryPage.ensureProductSortDropdownIsVisible()
  })

  When("I click on the product sorting dropdown", () => {
    InventoryPage.selectProductOptionAndVerify()
  })

  Then('I should see the options {string}, {string}, {string}, and {string}', (option1, option2, option3, option4) => {
    const options = [option1, option2, option3, option4]

    options.forEach((option) => {
        cy.wait(1000)
        InventoryPage.selectProductOptionAndVerify([option]);
      });
    });

    When('I select the {string} from the dropdown', (option) => {
        InventoryPage.selectProductOptionAndVerify([option]);
    });

    Then('the products should be sorted in {string} order', (sortOrder) => {
        InventoryPage.verifyProductsSortedByOrder(sortOrder);

    });
    
  