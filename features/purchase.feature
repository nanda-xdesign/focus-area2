Feature: Complete Purchase
  Scenario: As a logged-in user, I want to complete the purchase of an item from the product catalog so that I can receive my desired product.

    Given I am on the product catalog page
    When I click the 'Add to cart' button for a chosen item
    Then the item should be added to my shopping cart

    Given I have an item in my shopping cart 
    When I click the shopping cart icon
    Then I should be navigated to the 'Your Cart' page
    Then I should see the selected item listed in my cart

    Given I am on the 'Your Cart' page 
    When I click the 'Checkout' button 
    Then I should be navigated to the 'Checkout: Your Information' page

    Given I am on the 'Checkout: Your Information' page 
    When I enter valid shipping information
    When I click the 'Continue' button 
    Then I should be navigated to the 'Checkout: Overview' page

    Given I am on the 'Checkout: Overview' page 
    When I review the order summary
    When I click the 'Finish' button 
    Then I should be navigated to the 'Checkout: Complete!' page
    Then I should see a confirmation message


