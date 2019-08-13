Feature: petStore
  Scenario Outline: POST pet with json body
    Given I want to add a new pet
    When I do a "POST" operation
    And the endpoint is "/pet"
    And with Content-Type value "application/json"
    And body "<json>"
    Then The response code must be "<responseCode>"
    Examples:
    | json            | responseCode |
    | validPet1.json  | 200          |
    | invalidPet.json | 405          |

  Scenario Outline: PUT pet with json body
    Given I want to actualize the information of a pet that is already on the system
    When I do a "PUT" operation
    And the endpoint is "/pet"
    And with Content-Type value "application/json"
    And body "<json>"
    Then The response code must be "<responseCode>"
    Examples:
      | json                | responseCode |
      | validPet2.json      | 200          |
      | invalidPet.json     | 405          |

  Scenario Outline: GET pet by status
    Given I want to get a pet
    When I do a "GET" operation
    And the endpoint is "/pet"
    And with Content-Type value ""
    And status "<status>"
    Then The response code must be "<responseCode>"
    Examples:
      | status    | responseCode |
      | available | 200          |
      | pending   | 200          |
      | sold      | 200          |

  Scenario Outline: GET pet with petID
    Given I want to get a pet
    When I do a "GET" operation
    And the endpoint is "/pet"
    And with Content-Type value ""
    And  pet ID "<petId>"
    Then The response code must be "<responseCode>"
    Examples:
      | petId | responseCode |
      | 1     | 200          |
      | 2     | 404          |
      | 3     | 404          |

  Scenario Outline: DELETE pet with petID
    Given I want to delete a pet
    When I do a "DELETE" operation
    And the endpoint is "/pet"
    And with Content-Type value ""
    And pet ID "<petId>"
    Then The response code must be "<responseCode>"
    Examples:
      | petId | responseCode |
      | 1     | 200          |
      | 2     | 404          |
      | 3     | 404          |