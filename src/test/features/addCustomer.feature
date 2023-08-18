Feature: Add new customer

  Background:
    Given User navigates to the application

  Scenario Outline: Admin will add a new customer
    And User enter the username as "<username>"
    And User enter the password as "<password>"
    When User click on the signIn button
    Then Login should be success
    And user navigates to customers page
    And user selects customers section
    And user clicks on the "+" button
    And user inserts "<FirstName> <LastName> <Email> <Phone>"
    When user clicks on the save button
    Then new customer should be added
  
    Examples: 
          | username              |   password    |   firstName | lastName     |         email     |      phone       |    
          |flavycoman@yahoo.com   | Moderat22     | Andrew      | Gherkin      | andrew@gherkin.to | 03992883839      | 

