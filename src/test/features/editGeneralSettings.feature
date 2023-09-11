Feature: Edit general settings

  Background:
    Given admin navigates to the application
    And admin is logged in
    And admin navigates to the settings panel

  Scenario Outline: Verify that admin can add general settings
    When admin adds new settingsName
    And admin adds new primaryEmail
    And admin adds new  website
    And admin adds new adressLine1
    And admin adds new adressLine2
    And admin addds new city
    And admin adds new state
    And admin adds new zip
    And admin adds new bay names
    Then save button should be available
    When admin checks terms&co
    And amin checks policy checkbox
    Then save button should be available
    When admin clicks the save button
    Then general settings data should be updated

  Scenario Outline: Verify that admin can edit general settings with invalid email
    When admin adds new settingsName
    And admin adds new invalid primaryEmail
    Then email box  should invalidate incorrect email
    And  save button should be disabled

  Scenario Outline: Verify that admin cannot add general settings with invalid names 
    When admin adds invalid settingsName
    And admin adds new primaryEmail
    And admin adds new  website
    Then save button should be disabled
    
    