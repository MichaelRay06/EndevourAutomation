
var {ExpectedConditions}= require ('protractor');
var EC = protractor.ExpectedConditions;
var GoogleSearchListPage= function(){
var clickSelectLink= element (by.css('div:nth-child(2) > .rc .S3Uucc'));

    this.selectSearchText =  async function(){
    await   browser.wait(EC.elementToBeClickable(clickSelectLink),10000);
         await  browser.actions().mouseMove(clickSelectLink).click().perform();
        return require('./CypressURL_Content')



       

    };





    


};
module.exports= new GoogleSearchListPage();