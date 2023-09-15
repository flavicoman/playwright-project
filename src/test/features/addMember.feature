Feature: Add Member

   Background:
      Given admin navigates to the application
      Given admin is logged in
      And admin navigates to the members panel

   Scenario Outline: Verifiy that admin can add member with valid data and default membership
      When admin clicks on the "+" button
      And admin adds valid firstName
      And admin adds valid lastName
      And admin adds valid email
      And admin adds valid phoneNumber
      Then save button for new member should be available
      And admin clicks the save button
      Then member should be added succesfully

   Scenario Outline: Verifiy that admin can add member with valid data and selected membership
      When admin clicks on the "+" button
      And admin adds valid firstName
      And admin adds valid lastName
      And admin adds valid email
      And admin adds valid phoneNumber
      And admin adds desired membership
      And admin selects desired date
      Then save button for new member should be available
      And admin clicks the save button
      Then member should be added succesfully

   Scenario Outline: Add member with invalid names
      When admin clicks on the "+" button
      And admin adds invalid first name
      And admin adds invalid last name
      Then changes cannot be saved

   Scenario Outline: Add new member with invalid phone number and email
      When admin clicks on the "+" button
      And admin adds valid firstName
      And admin adds valid lastName
      And admin adds invalid member phoneNumber
      And admin adds invalid member email
      Then changes cannot be saved