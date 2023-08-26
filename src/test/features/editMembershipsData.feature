Feature : Edit memebrships settings 

    Background : 
      Given admin navigates to the application 
      And admin goes to the memberships panel 
 
     Scenario Outline: Verify that admin can edit maximum memberships allowed 
          Given admin is on the memberships panel
          When admin selects the maximum memberships allowed input box
          And admin edits the memberships number
          And admin clicks the save button
          Then, on the reservations panel, capacity percentage should be adjusted

     Scenario Outline: Verify that admin can add new membership plan 
          Given admin selects the “+” symbol
          And admin adss new Name
          And admin adds new  bookingGroup
          And admin adds max hours of play
          And admin adds months as expire date
          And admin selects subscriptiontype subscriptionPlan
          Then save button should be available
          Given admin clicks the save button
          Then New membership plan should be added 

     Scenario Outline: Verify that admin can edit membership plan 
          Given admin selects the “+” symbol of the desired planName
          And admin adds newName
          And admin adds new  bookingGroup
          And admin adds max hours of play
          And admin adds months as expire date
          And admin selects subcriptionType subscriptionPlan
          Then save button should be available
          Given admin clicks the save button
          Then New membership plan should be added 

     Scenario Outline: Verify that admin can delete membership plan 
          Given admin clicks the 3 dots on the desired planName
          And admin selects the “Delete” option
          When “Delete membership plan “ pop-up window appears
          Then admin clicks on the “Continue” button
          And plan should be deleted succesfully   