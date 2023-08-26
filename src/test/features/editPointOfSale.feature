Feature : Edit point of sale settings 

    Background :  
         Given user navigates to the application
         And user navigates to the point of sale panel

     Scenario Outline : Verify that admin can add new rate 
         Given admin clicks the “+” symbol
         And admin selects color
         And admin adds newRateName
         And admin adds new fee
         And admin adds category And admin adds glCode
         And admin clicks the save button
         Then new rate should be added succesfully

     Scenario Outline : Verify that admin can edit rate 
         Given admin selects desired rateName
         And admin clicks on the 3 dots symbol on the right side of the rate name
         And admin selects the edit option
         And admin adds newRateName
         And admin adds new fee
         And admin adds new category
         And admin adds new glCode
         And admin clicks the save button
         Then rate edit should be saved succesfully

     Scenario Outline : Verify that admin can delete rate  
         Given admin selects desired rateName
         And admin clicks on the 3 dots symbol on the right side of the rate name
         And admin selects the delete option
         Then “Delete rate” window should pop-up
         And admin clicks the “continue” button
         Then rate should be deleted succesfully

    Scenario : Verify that admin can add requirement for payment at time of booking 
         Given user navigates on the bottom side of the page
         And user checks the box from “require payment at time of booking” step
         Then “enable payment” window should pop up
         And user clicks on “continue” button
         The payment at time of booking should be enabled