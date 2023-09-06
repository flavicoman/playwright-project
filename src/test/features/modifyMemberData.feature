Feature: Modify member

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

 Scenario Outline: Verify that admin can edit membership plan/date
    Given admin selects member's account
    And admin selects membership tab
    And admin clicks the 3 dots in the right corner
    Then the memebrship options feature should pop-up
    And admin clicks “Edit membership”
    Then “Edit” option will pop-up
    When admin selects effective dateType date
    And admin selects membershipType membershipplan
    Then “save” button should be available
    And admin clicks the “save” button
    Then user's membership should be edited succesfully


  Scenario Outline: Deactivate membership functionality 
   When admin selects member's account
   And admin clicks on the Membership tab 
   And admin clicks the three dots on the right
   And admin selects deactivate membership option
  Then deactivate membership button should appear
  When admin clicks on the deactivate button
  Then member should be moved back to customer section 

