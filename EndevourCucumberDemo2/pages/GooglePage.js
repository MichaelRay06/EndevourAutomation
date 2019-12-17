var {ExpectedConditions}= require ('protractor');
var EC = protractor.ExpectedConditions;

var GooglePage = function(){


    var sendTextCypress= element(by.name('q'));


    this.googleTextField= async function(value){
       await  browser.wait(EC.visibilityOf(sendTextCypress),10000);
        return await browser.actions().mouseMove(sendTextCypress).sendKeys(value).perform();


    };

    this.clickToSearch=  async function(){
       await  element(by.name('q')).sendKeys(protractor.Key.ARROW_DOWN);
       await  element(by.name('q')).sendKeys(protractor.Key.ENTER);
        return require ('./GoogleSearchListPage.js');
    };









};
module.exports= new GooglePage();