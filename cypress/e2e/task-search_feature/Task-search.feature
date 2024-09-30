Feature: Search functionality on ZeroBank website
  As a user
  I want to search for information on the ZeroBank website
  So that I can easily find the content I am looking for

Scenario: Searching for "Account Summary" in the search bar
    Given i'm on the ZeroBank homepage
    When i enter "Account Summary" in the search bar
    And i click the "Search" button
    Then the search results page is displayed
    And the results contain link related to "Account Summary"

Scenario: Searching for "Online Statements" in the search bar
    Given i'm on the ZeroBank homepage
    When i enter "Online Statements" in the search bar
    And i click the "Search" button
    Then the search results page is displayed
    And the results contain link related to "Online Statements"

Scenario: Searching with invalid input
    Given I am on the ZeroBank homepage
    When I enter "!!!!" in the search bar
    And I click the "Search" button
    Then the search results page is displayed
    And the results contain a message saying "No results found for '!!!!'"

