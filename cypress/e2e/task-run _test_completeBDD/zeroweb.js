
import HomePage from './zeroweb.page';
const { When, Then, Given } = require('@badeball/cypress-cucumber-preprocessor');

// Scenario: Successful search with a valid keyword
Given('I am on the homepage', () => {
    HomePage.visit()
    // cy.visit('http://zero.webappsecurity.com/index.html');
});

When('I enter "Online" in the search bar', () => {
    HomePage.search('Online')
});

When('I click the "Search" button', () => {
    HomePage.enter('{enter}')
});

Then('I should see results related to "Online"', () => {
    HomePage.verify()
});

Then('The results page should display links and information relevant with my search', () => {
    HomePage.verifyResults('Online')
});

// Scenario: Search with an invalid keyword
When('I enter "!@#$" in the search bar', () => {
    HomePage.invalidKeyword('!@#$')
});

Then('I should see a message "No results found"', () => {
    HomePage.noResults()
});

Then('the results page should not display any links or related information', () => {
    HomePage.noResultsDisplay('!@#$')
});

// Scenario: Search with an empty keyword
When('I leave the search bar empty', () => {
    HomePage.clear()
});

Then('I should see a message saying "Search Results"', () => {
    HomePage.resultDisplay()
});

Then('No results should be displayed' , () => {
    HomePage.blankDisplay()
});

// Scenario: Search with a single character
When('I enter "a" in the search bar', () => {
    HomePage.search('a');
});

Then('I should see results related to "a"', () => {
    HomePage.verifyResults('a');
});


