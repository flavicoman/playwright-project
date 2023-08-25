Feature: User Authentication tests

  Background: 
    Given User navigates to the application

   Scenario: Login should be success
     And User enter the username 
     And User enter the password 
     When User click on the signIn button
    Then Login should be success
     And the User clicks on the arrow button
     And the User clicks on the logout button
     And the User clicks on the logout confirm button
     Then the user should be logged out

 
       
  


   #Scenario: Login should be failed
   #  Given User enter the username as "<username>"
   #  Given User enter the password as "<password>"
  #   When User click on the signIn button
  #   But Login should fail

 #  Examples: 
  #  | username              |   password    |    
 #   | flavycoman@yahoo.com |   Moderat223   | 
