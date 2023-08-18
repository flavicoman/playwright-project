Feature: Add new reservation

  Background:
    Given User navigates to the application

  Scenario: User adds new reservation
    And User enter the username as "<admin>"
    And User enter the password as "<password>"
    Given User click on the signIn button 
    Given User is succesfully logged in
    #Then User selects desired "<Day>"
    #Then User selects desired "<Bay>"
    #Then User selects desired "<Hour>"
    Then User clicks on the + sign
    And User selects "<Reservationtype>"
    And User selects "<Member>" name
    And User increases desired "<Hours>"
    And User clicks the save button
    Then the reservation should be successfully added



    Examples: 
    | admin                |   password    |    Bay |  Hour  | Day        | Reservationtype  | Member        | Hours | 
    | flavycoman@yahoo.com |   Moderat22   |   A    |  7:00a | 18.08.2023 |  Tee Time        | Coman Flavius | 2 | 
