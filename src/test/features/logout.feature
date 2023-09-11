Feature: User Authentication Test

    Background:
        Given admin navigates to the application
        And admin is logged in

    Scenario Outline: Verify that admin can logout
        When admin clicks the dropdown arror in the top right corner
        And logout option appears
        When admin clicks the logout button
        Then admin should be succesfully logged out

