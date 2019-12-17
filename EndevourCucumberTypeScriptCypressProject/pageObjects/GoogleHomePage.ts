import {browser, element, by, protractor, ExpectedConditions as EC } from "protractor"
export class GoogleHomePage {
    

       googleTextBox= element(by.name('q')); 


    googleTextField= async (searchText) =>{
        await browser.wait(EC.visibilityOf(this.googleTextBox),10000);
        await this.googleTextBox.sendKeys(searchText);
      
      
          };
      
          clickToSearch= async ()=> {
           await  browser.wait(EC.visibilityOf(this.googleTextBox),10000);
            // await this.googleTextBox.sendKeys(protractor.Key.ARROW_DOWN);
             await this.googleTextBox.sendKeys(protractor.Key.ENTER);
            return require ('./GoogleSearchLinks');
              
          };





}