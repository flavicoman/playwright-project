Feature: Add new reservation

  Background:
    Given admin navigates to the application

  Scenario: Verify that admin can add new reservation
    And User enter the username 
    And User enter the password 
    Given User click on the signIn button 
    Given User is succesfully logged in
    #Then User selects desired day
    #Then User selects desired bay
    #Then User selects desired hour
    Then User clicks on the + sign
    And User selects reservationType
    And User selects member name
    And User increases desired hours
    And User clicks the save button
    Then the reservation should be successfully added
