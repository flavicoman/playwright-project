Feature : Edit member's account data 

  Background: 
     Given admin navigates to the application 
     And admin selects the members page 

  Scenario Outline: Verify that admin can modify member's data
     Given admin selects member's account
     And member's personal file pops up
     And admin inserts new  firstName
     And admin inserts new lastName
     And admin insers new phoneNumber
     Then save button should be available
     And admin clicks the save button
     Then member's account data should be edited succesfully

   Scenario Outline: Verify that admin can deactivate membership functionality 
     Given admin selects member's account
     And admin selects membership tab
     And admin clicks the 3 dots in the right corner
     Then the memebership options feature should pop-up
     And admin clicks “Deactivate membership”
     Then “Deactivate” option will pop-up, along with the starting date
     Given admin selects effective dateType date
     And admin clicks the deactivate button
     Then user's membership should be deactivated

  
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