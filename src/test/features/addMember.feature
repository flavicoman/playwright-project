Feature: Add Member

Background:
    Given User is logged in
    And admin navigates to the members panel 
   
Scenario Outline: Add Member with valid data 
  Given admin clicks on the "+" button 
  And admin adds valid firstName 
  And admin adds valid lastName 
  And admin adds valid phoneNumber 
  And admin adds valid email 
  Then save button should be available 
  And admin clicks the save button 
  Then member should be added succesfully

Scenario Outline: Add member with invalid names 
  Given admin clicks on the "+" button 
  And admin adds invalid first name 
  And admin adds invalid last name 
  Then save button should be unavailable 

Scenario Outline: Add new member with invalid phone phoneNumber
  Given admin clicks on the "+" button 
  And admin adds firstName 
  And admin adds lastName 
  And admin adds invalid phoneNumber
  Then save button should be unavailable
  