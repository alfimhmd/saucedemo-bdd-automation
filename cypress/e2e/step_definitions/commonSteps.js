import {
    Given,
    When,
  } from "@badeball/cypress-cucumber-preprocessor";
import InventoryPage from "@pages/InventoryPage";
import { loginPage } from "@pages/LoginPage";

  Given("I am on the product page", () => {
    InventoryPage.ensureOnPage()
  })

  Given("A web browser is at the saucelabs login page", () => {
    cy.visit("/");
  });
  
  When("A user enters the username {string}, the password {string}, and clicks on the login button", (username,password) => {
    loginPage.submitLogin(username,password)
  });