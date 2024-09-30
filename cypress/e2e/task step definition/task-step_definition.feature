Feature: Login to Application

    As a valid user
    I want to login into application

    Scenario: Valid Login
        Given I open login page
        When I submit login
        Then I should see homepage
    Scenario: Successful Logout
        Given I am logged into the application
        When I click logout
        Then I should be logged out and see the login page
    Scenario: Invalid Login
        Given I open login page
        When I submit invalid login
        Then I should see error message

    Scenario: Empty Credentials
        Given I open login page
        When I submit empty login
        Then I should see validation message