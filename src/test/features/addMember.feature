Feature: Add Member

Background:
    Given admin navigates to the application 
    Given admin is logged in
    And admin navigates to the members panel 
   
 Scenario Outline: Verifiy that admin can add member with valid data 
    Given admin clicks on the "+" button 
    And admin adds valid firstName 
    And admin adds valid lastName 
    And admin adds valid email 
    And admin adds valid phoneNumber
    #Then save button should be available 
    #And click on 'Save' button
    And admin clicks the save button 
    Then member should be added succesfully

 #Scenario Outline: Add member with invalid names 
    #Given admin clicks on the "+" button 
    #And admin adds invalid first name 
    #And admin adds invalid last name 
    #Then save button should be unavailable 

 #Scenario Outline: Add new member with invalid phone number 
   #Given admin clicks on the "+" button 
   #And admin adds valid firstName 
   #And admin adds invalid lastName 
   #And admin adds invalid phoneNumber
   #Then save button should be unavailable
  