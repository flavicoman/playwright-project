Feature: Edit memeberships settings

     Background:
          Given admin navigates to the application
          And admin is logged in
          And admin goes to the memberships panel

     Scenario Outline: Verify that admin can edit maximum memberships allowed
          When admin selects the maximum memberships allowed input box
          And admin edits the memberships number
          And admin clicks the save button
          Then maximum value should be adjusted

     Scenario Outline: Verify that admin can add new membership plan
          Given admin selects the “+” symbol
          When admin adds new Name
          And admin adds new  bookingGroup
          And admin adds max hours of play
          And admin adds months as expire date
          And admin selects subscriptionPlan
          Then save button should be available
          When click on the save button
          Then New membership plan should be added

     Scenario Outline: Verify that admin can edit membership plan
          When admin selects the edit option of the desired planName
          And admin adds new Name
          And admin adds new  bookingGroup
          And admin adds max hours of play
          And admin adds months as expire date
          And admin selects subscriptionPlan
          Then save button should be available
          When click on the save button
          Then membership plan should be edited succesfully

Scenario Outline: Verify that admin can delete membership plan
Given admin clicks the 3 dots on the desired planName
And admin selects the “Delete” option
When “Delete membership plan “ pop-up window appears
Then admin clicks on the “Continue” button
And plan should be deleted succesfully