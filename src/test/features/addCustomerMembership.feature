Feature: Add new membership to a customer

  Background:
    Given admin navigates to the application
    And admin is logged in
    And admin goes to the customers section

  Scenario Outline: Verify that admin can add membership to existing customer
    When admin clicks on the customers name
    Then window with customer details should pop-up
    And admin navigates on the membership tab
    And admin clicks “Add a Membership” button
    And admin selects memebership plan
    Then save button should be available
    And admin clicks the save button
    Then user membership should be added succesfully
    And customer should be moved in the Members section