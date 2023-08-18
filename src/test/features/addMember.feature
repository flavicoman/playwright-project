Feature: Add Member

Background:
    Given User navigates to the application

Scenario Outline: Add Member
    And User enter the username as "samueldunca@yahoo.com"
    And User enter the password as "Frodo123"
    When User click on the signIn button
    Then Login should be success
    And the user clicks on the "Members" page button
    And user clicks on "+" button
    And user insert personal data: "<firstName> <lastName> <email> <phone>"
   When the user clicks on "save" button
  Then the member should be created

    Examples: 
    | username              |   password    |   firstName | lastName    |         email      |      phone       |    
  