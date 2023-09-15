Feature: User Authentication Test

  Background:
    Given admin navigates to the application

  Scenario: Verify that valid user can login
    When User enter valid username
    And User enter valid password
    And User click on the signIn button
    Then Login should be success

  Scenario: Verify that user can login with invalid username
    When User enter invalid username
    And User enter valid password
    And User click on the signIn button
    Then user should not be allowed to login

  Scenario: Verify that user can login with invalid password
    When User enter valid username
    And User enter invalid password
    And User click on the signIn button
    Then user should be notified about wrong password

