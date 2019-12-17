var {ExpectedConditions}= require ('protractor');
var EC = protractor.ExpectedConditions;

var CypressURL_Content= function(){
    

    this.moveToWindowPopUp= async function(){
        var button= element (by.css('#adroll_consent_banner > div.adroll_consent_notice'));
        browser.wait(EC.visibilityOf(button),10000);
       return browser.actions().mouseMove(button).perform();


  };


  this.rejectWindowPopUp= async function(){

    var rejectButton=  element(by.css('#adroll_reject > div'));
     await  browser.wait(EC.elementToBeClickable(rejectButton),10000);
    await browser.actions().mouseMove(rejectButton).perform();
  return await  rejectButton.click();


  };

  this.clickDocsLink= async function(){ 
    var docLINK= element(by.xpath('//ul[2]/li[3]/a'));
     await  browser.wait(EC.elementToBeClickable(docLINK),10000);
    await browser.actions().mouseMove(docLINK).perform();
   await  docLINK.click();
   return require ('../utilities/Utils.js');
  




    };



};
module.exports= new CypressURL_Content();