
const code = `Feature: Using Google
  Background: 
    Something something
    Something else
  Scenario: Has a homepage
    When I navigate to the google home page
    Then the home page should contain the menu and the search form
  Scenario: Searching for a term 
    When I navigate to the google home page
    When I search for Tofu
    Then the search results page is displayed
    Then the search results page contains 10 individual search results
    Then the search results contain a link to the wikipedia tofu page

`;

export default code;
