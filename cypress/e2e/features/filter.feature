Feature: Product Sorting Dropdown Functionality

  Background:
    Given A web browser is at the saucelabs login page
    When A user enters the username "standard_user", the password "secret_sauce", and clicks on the login button

  Scenario: Verify dropdown accessibility
    Given I am on the product page
    Then I should see a dropdown for product sorting

  Scenario: Verify all options are accessible in dropdown
    Given I am on the product page
    Then I should see the options "Name (A to Z)", "Name (Z to A)", "Price (low to high)", and "Price (high to low)"

  Scenario Outline: Select option "<Option>" and verify sorting
    Given I am on the product page
    When I select the "<Option>" from the dropdown
    Then the products should be sorted in "<SortOrder>" order

    Examples:
      | Option             | SortOrder |
      | Name (A to Z)      | alphabetical |
      | Name (Z to A)      | reverse alphabetical |
      | Price (low to high) | ascending price |
      | Price (high to low) | descending price |
