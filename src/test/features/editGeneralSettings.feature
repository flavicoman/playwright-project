Feature: Edit general settings

  Background:
    Given User navigates to the application

  Scenario Outline: Admin will edit general settings
    And User enter the username as "<username>"
    And User enter the password as "<password>"
    When User click on the signIn button
    Then Login should be success
    And user navigates to general settings page 
    And user adds new settings : "<Name>" "<primaryEmail>" "<website>" "<adressLine1>" "<adressLine2>" "<City>" "<State>" "<Zip>" 
    And user clicks the "save" button 
    Then settings should be added succesfully : "<Name>"
    
  
  
    Examples: 
          | username              |   password    |   Name      | primaryEmail     | website           |      adressLine1           | adressLine2       | City       | State         | Zip           |   
          |flavycoman@yahoo.com   | Moderat22     | Andre     | Gherkin@dot.to   | andrewgherkin.to  | New york NY 922282         |   tes23           |Nevada      |  New York     | 2313231        |                 
