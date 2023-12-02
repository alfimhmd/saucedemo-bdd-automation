import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "@pages/LoginPage";

  Given("A web browser is at the saucelabs login page", () => {
    cy.visit("/");
  });
  
  When("A user enters the username {string}, the password {string}, and clicks on the login button", (username,password) => {
    loginPage.submitLogin(username,password)
  });