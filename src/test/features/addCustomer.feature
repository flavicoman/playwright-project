Feature: Add new customer

  Background:
    Given admin navigates to the application
    And admin is logged in 
    And admin goes to the customers section

  Scenario Outline: Verify that admin can add customer with invalid name
    Given admin clicks on the "+" button 
    And admin adds invalid customer firstName & lastName
    And admin adds valid customer email
    And admin adds valid customer phoneNumber
    Then save button should be unavailable 

  
   Scenario Outline: Verify that admin can add customer with invalid phone number
    Given admin clicks on the "+" button 
    And admin adds valid customer firstName
    And admin adds valid customer lastName 
    And admin adds invalid phoneNumber
    Then save button should be unavailable 

  Scenario Outline: Verify that admin can add customer with valid data
   Given admin clicks on the "+" button 
   And admin adds valid customer firstName
   And admin adds valid customer lastName
   And admin adds valid customer email
   And admin adds valid customer phoneNumber
   Then save button should be available
   And admin clicks the save button
   Then customer should be added succesfully
