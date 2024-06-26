Feature: Edit point of sale settings

        Background:
                Given admin navigates to the application
                And admin is logged in
                And admin navigates to the point of sale panel

        Scenario Outline: Verify that admin can add new rate
                Given admin clicks on the "+" button
                And admin adds newRateName
                And admin adds new fee
                And admin adds category
                And admin adds glCode
                And admin clicks the save button
                Then new rate should be added succesfully

        Scenario Outline: Verify that admin can edit rate
                Given admin clicks on the dots symbol on the right side of the desired rate name
                And admin selects the edit option
                And admin adds newRateName
                And admin adds new fee
                And admin adds new category
                And admin adds new glCode
                And admin clicks the save button
                Then rate edit should be saved succesfully

        Scenario Outline: Verify that admin can delete rate
                Given admin clicks on the dots symbol on the right side of the desired rate name
                And admin selects the delete option
                Then “Delete rate” window should pop-up
                And admin clicks the “continue” button
                Then rate should be deleted succesfully

        Scenario: Verify that admin can add requirement for payment at time of booking
                When user checks the box from “require payment at time of booking” step
                Then “enable payment” window should pop up
                And admin clicks on “continue” button
                Then payment at time of booking should be enabled