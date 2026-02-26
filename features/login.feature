Feature: User Login to SauceDemo
    Scenario: As a returning user, I want to securely log in to the SauceDemo website so that I can access the product catalog and proceed with my shopping experience.
    
        Given I am on the login page
        When I enter valid credentials in the respective fields
        When I click the 'Login' button 
        Then I should be redirected to the product catalog page
        Then I should see the product listings