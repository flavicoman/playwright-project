Feature: User Authentication Test

  Background: 
    Given admin navigates to the application

   Scenario: Verify that valid user can login 
     When User enter the username 
     And User enter the password 
     And User click on the signIn button
     Then Login should be success
     When the User clicks on the arrow button
     And the User clicks on the logout button
     And the User clicks on the logout confirm button
     #Then the user should be logged out
