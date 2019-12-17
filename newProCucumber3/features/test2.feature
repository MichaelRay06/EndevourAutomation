Feature: testing cypress site.

    Scenario Outline: the cypress site
        Given I navigate to web site
        When I type in "<TextToSerch>"
        And click to enter
        And click the cypress link
        When I validated the page title as "<expectedPageTitle>"
        When get the current url as "<expectedCurrent_URL_PgeContent>"
        #When I handled the alert
        #When I handled reject alert
        When click on dock link


        Examples:
            | TextToSerch | expectedPageTitle                             | expectedCurrent_URL_PgeContent |
            | cypress     | JavaScript End to End Testing Framework       | cypress                        |



  
       
      