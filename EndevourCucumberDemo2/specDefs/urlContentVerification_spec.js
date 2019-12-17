var objectDataProvider = require('../dataResources/dataProvider.js')
var GooglePage = require('../pages/GooglePage.js');
var GoogleSearchListPage = require('../pages/GoogleSearchListPage.js');
var CypressURL_Content = require('../pages/CypressURL_Content.js');
var confs=require('../configuration.js');
//var WhyCypressContent =require('../pages/WhyCypressContent.js');
var using = require('jasmine-data-provider');
var Utils = require('../utilities/Utils.js');



describe('ENDEVOUR CYPRESS SITE TEST AUTOMATION: verifying  the landing page(current URL) has the text cypress', function () {


  beforeEach(function () {
   Utils.getURL(browser.params.url);
    console.log('info', 'naviget to Google web site');

  });

  using(objectDataProvider.dataDriven, function (data, description) {
    it('the cypress landing page url contain the text cypress : ' + description, async function () {


      Utils.getPageTitle().then(function (googlePageTitle) {
        console.log('info', 'THe GOOGLE PAGE TITLE IS PRINTED AS:>>>>>>>>>>>>>>>>>' + googlePageTitle);
        expect(googlePageTitle).toEqual(data.verifyGooglePageTitle);

      })


      await GooglePage.googleTextField(data.googleTextBoxValue);
      console.log('info', 'SEND TEXT TO GOOGLE TEXT FIELD');

      await GooglePage.clickToSearch();
      console.log('info', 'CLICK ENTER TO SEARCH FOR TEXT');


      await GoogleSearchListPage.selectSearchText();
      console.log('info', 'SELECT THE SEARCH TEST FROM GOOGOLE SEARCH TEXT LINKS');




      await Utils.getCurrentURLContent().then(function (currentURL) {
        console.log('THIS IS THE CURRENT URL>>>>>>>>>>>>>>>>>>>>' + currentURL)
        console.log('info', 'ON THE CYPRESS LANDING PAGE, GET THE CURRENT URL CONTENT AS ' + currentURL);
        expect(currentURL).toContain(data.verifyCurrentURL_Content);
      })
    })
  })
});


    /*   })



      await CypressURL_Content.moveToWindowPopUp();
      console.log('info', 'MOVE TEST CONTROL TO ALERT POP-UP');

      await CypressURL_Content.rejectWindowPopUp();
      console.log('info', 'CLICK TO REJECT ALERT');

      await CypressURL_Content.clickDocsLink();
      console.log('info', 'CLICK ON DOCs LINK TO OPEN CHILD WINDOW');

      await browser.getAllWindowHandles().then(function (handles) {
        console.log('info', 'CHILD WINDOW OPENS');

        browser.switchTo().window(handles[1]).then(function () {
          console.log('info', 'SWITCH TO CHILD WINDOW');


          Utils.getPageTitle().then(function (childWindowPageTitle) {
            console.log('THIS IS CHILD WINDOW PAGE TITLE:>>>>>>>>>>>>>>>>>' + childWindowPageTitle);
            expect(childWindowPageTitle).toEqual(data.verifyChildWindowPageTitle);
            console.log('info', 'VERIFY THE CHILD WINDOW TITLE AS>>' + childWindowPageTitle);
          })


          Utils.getText().then(function (childWindowTextValue) {
            console.log(childWindowTextValue);
            expect(Utils.getText()).toEqual(data.verifyChildWindowPageContent);
            console.log('info', 'VERIFY THE CHILD WINDOW HAS A TEXT VALUE:'+childWindowTextValue);

          })


          browser.close;
          console.log('info', 'CLOSE CHILD WIMDOW');
        });



        browser.switchTo().window(handles[0]).then(function () {
          console.log('info', 'SWITCH CONTROL BACK TO PARENT WINDOW');

          Utils.getPageTitle().then(function (parentWindowPageTitle) {
            console.log('info', 'PRINT THE PARENT WINDOW PAGE TITLE AS :>>>>>>>>>>>>>>>>>' + parentWindowPageTitle);
            expect(parentWindowPageTitle).toEqual(data.verifyParentWindowPageTitle);
          })



        })

      });

    })
  });
 */






