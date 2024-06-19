Feature: Modify member's membership data

    Background:
        Given admin navigates to the application
        And admin is logged in
        And admin navigates to the members panel

    Scenario Outline: Modify member account's data
        When admin selects member's account
        And member's personal file pops up
        And admin inserts new  firstName
        And admin inserts new lastName
        And admin insers new phoneNumber
        Then save button should be available
        And admin clicks the save button
        Then member's account data should be edited succesfully
