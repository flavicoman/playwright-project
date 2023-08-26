Feature: Add new customer

  Background:
    Given User navigates to the application
    And admin is logged in 
    And user goes to the customers section

  Scenario Outline: Verify that admin can add customer with invalid name
    Given admin clicks on the "+" button 
    And admin adds invalid firstName
    And admin adds invalid lastName 
    Then save button should be unavailable 

  
  Scenario Outline: Verify that admin can add customer with invalid phone number
    Given admin clicks on the "+" button 
    And admin adds firstName
    And admin adds lastName 
    And admin adds invalid phoneNumber
    Then save button should be unavailable 

  Scenario Outline: Verify that admin can add customer with valid data
   Given admin clicks on the “+” button
   And admin adds valid FirstName
   And admin adds valid LastName
   And admin adds valid phoneNumber
   And admin adds valid email
   Then save button should be available
   And admin clicks the save button
  Then member should be added succesfully
