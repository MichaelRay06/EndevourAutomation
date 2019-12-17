
var elementLocator =require('../dataSet/data.js');
var {brower} =require ('protractor');
var {Given,When,Then,And} =require ('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;



var basePage =require ('../pages/BasePage.js');

Given('I navigate to web site', function () {
    // Write code here that turns the phrase above into concrete actions
    //return browser.get('https://www.google.com/');
          return  basePage.go('https://www.google.com/');
  });


var googlePge =require ('../pages/GooglePage.js');
  When('I type in {string}', function (TextToSerch) {
    //return element(by.name('q')).sendKeys(TextToSerch);
   return googlePge.googleTextField(TextToSerch);

  });



  When('click to enter', function () {
  

   return  googlePge.googleTextField_ENTER();
 
  });


  var selectGoogleLink =require ('../pages/SelectGoogleLink.js');
  When('click the cypress link', function () {
    selectGoogleLink.clickGoogleLink();
    
  
  });


  When('I validated the page title as {string}', function (expectedPageTitle) {
    //actualpageTitle =browser.getTitle();
    //return  expect(actualpageTitle).to.eventually.include(expectedPageTitle);
    var actualpageTitle= basePage.getTitle();
    return  expect(actualpageTitle).to.eventually.include(expectedPageTitle);
    browser.sleep(2000);
  });



  When('get the current url as {string}', function (expectedCurrent_URL_PgeContent) {
    //var ctualCurrent=  browser.getCurrentUrl();
   // return expect(ctualCurrent).to.eventually.contain(expectedCurrent_URL_PgeContent);
   var ctualCurrent= basePage.getCurrentURL();
   return expect(ctualCurrent).to.eventually.contain(expectedCurrent_URL_PgeContent);
   
  });

  /* When('I handled the alert', function () {
    // Write code here that turns the phrase above into concrete actions
    var button= element (by.css('#adroll_consent_banner > div.adroll_consent_notice'));
      return browser.actions().mouseMove(button).perform();
  });



  When('I handled reject alert', function () {
    // Write code here that turns the phrase above into concrete actions
    var rejectButton=  element(by.css('#adroll_reject > div'));
    browser.actions().mouseMove(rejectButton).perform();
    return rejectButton.click();
  });

 */
  var cypressHome =require('../pages/cypressHomePage.js');
  When('click on dock link', function () {
       //return browser.actions().mouseMove(clickDocsLink).click().perform();
  //return element(by.xpath('//ul[2]/li[3]/a')).click();
  return cypressHome.clickDocksLink();
  });

  


 