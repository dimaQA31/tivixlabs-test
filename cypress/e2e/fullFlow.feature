Feature: Full flow

  Rule: Happy path

  Scenario: Do a successful order
    Given I am on search page
    When I set "Poland" and "Wroclaw"
    And I set "2023-06-27" and "2023-06-29" dates
    And I press search button
    Then I finish selecting and verify dates: "2023-06-27" and "2023-06-29"
    When I fill the correct personal data
    Then I see 'Success' message