Feature: Search functionality

  Rule: Errors reproducing

  Background: On a search page
    Given I am on search page

  Scenario: Reproduce dates error message
    When I set "Poland" and "Wroclaw"
    And I press search button
    Then I should see the error "Please fill pickup and drop off dates"

  Scenario: Reproduce country does not match city error message
    When I set "Poland" and "Berlin"
    And I set "2023-06-27" and "2023-06-29" dates
    And I press search button
    Then I should see the error "Country doesn't match city"
