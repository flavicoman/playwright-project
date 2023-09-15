Feature: Modify member's membership data

  Background:
    Given admin navigates to the application
    And admin is logged in
    And admin navigates to the members panel

  #When running this scenario, username must be changed

  Scenario Outline: Verify that admin can edit membership plan/date
    When admin selects member's account
    And admin clicks on the Membership tab
    And admin clicks the three dots on the right
    Then the membership options feature should pop-up
    And admin clicks “Edit membership”
    And admin selects membershipPlan
    When admin selects date
    Then save button should be available
    And admin clicks the save button
    Then user's membership should be edited succesfully

  Scenario Outline: Deactivate membership functionality
    When admin selects member's account
    And admin clicks on the Membership tab
    And admin clicks the three dots on the right
    And admin selects deactivate membership option
    Then deactivate membership button should appear
    When admin clicks on the deactivate button
    Then member should be moved back to customer section

