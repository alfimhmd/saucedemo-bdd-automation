Feature: Shopping Cart Functionality

Background: 
  Given A web browser is at the saucelabs login page
  And A user enters the username "standard_user", the password "secret_sauce", and clicks on the login button
  And I am on the product page

Scenario: Verifying the addition and removal of the item
  When I have clicked the "Add to cart" button for "Sauce Labs Backpack"
  And I have clicked the "Add to cart" button for "Sauce Labs Bike Light"
  Then the selected "Sauce Labs Backpack" should change to "Remove" button
  And the cart badge should display "2"
  When I click the "Remove" button for "Sauce Labs Backpack"
  Then the button should change to "Add to cart"
  And the cart badge should display "1"

  When the selected "Sauce Labs Bike Light" should change to "Remove" button
  And the cart badge should display "1"
  And I click the "Remove" button for "Sauce Labs Bike Light"
  Then the button should change to "Add to cart"
  And the cart badge should display "not visible"

  Scenario Outline: Viewing the cart with multiple items
    Given I have added the following items to the cart
      | Item                      |
      | <Item1>                   |
      | <Item2>                   |
    When I click on the cart icon
    Then the cart should list "<ItemCount>" items

    Examples:
      | Item1                   | Item2                             | ItemCount | TotalPrice |
      | Sauce Labs Backpack     | Sauce Labs Bike Light             | 2         | $39.98     |
      | Sauce Labs Bolt T-Shirt | Test.allTheThings() T-Shirt (Red) | 2         | $31.98     |
