Feature: validating the cypress site page contents


      Background:
      Given I navigated to site
     
     @currentURL_Content
     Scenario Outline: as a user, I am validating the that the landing page of a cypress site URL conatins the text cypress
        When I typed in "<searchText>" in the search box
        When enter to search text
        When I am on google search links, I select and click on link to search
        When I am on cypress landing page I verify the "<PageTitle>"
        Then I could verify the current url has a text "<currentURL_content>"

        Examples:
            | searchText | PageTitle                                          | currentURL_content |
            | cypress    | JavaScript End to End Testing Framework cypress.io | cypress            |


       @whyCypress 
       Scenario Outline: As a user, I could verify that the cypress child window page has a text content WHY CYPRESS.
        When I typed in "<searchText>" in the search box
        When enter to search text
        When I am on google search links, I select and click on link to search
        When I am on cypress landing page I verify the "<PageTitle>"
        Then I could verify the current url has a text "<currentURL_content>"
        When window alert opened  I click to reject alert
        When I click on docs link
        Then a child window opened and I switch to it
        Then I verify its page title as cypress 'expected_child_Window_Title'
        Then I could very that the child window page content has an 'expected_Text_Content'
        When verified, I close the child window
        When I switch back to parent window
        Then I verify the page title as 'expected_Parent_window_title'

        Examples:
            | searchText | PageTitle                                          | currentURL_content | expected_child_Window_Title        | expected_Text_Content | expected_Parent_window_title                       |
            | cypress    | JavaScript End to End Testing Framework cypress.io | cypress            | Why Cypress? Cypress Documentation | Why Cypress?          | JavaScript End to End Testing Framework cypress.io |




    