import {element, by, ElementFinder, ExpectedConditions as EC, browser} from "protractor";
export class CypressChildWindowPage {


    getCypressText =  element(by.css('h1.article-title'));
    
   
       
     
        getChidPageTextContent = async ()=> {
           await browser.wait(EC.visibilityOf(this.getCypressText), 10000);
           return await this.getCypressText.getText();
    }
    getChidTextContent = async ()=> { 
        return await this.getCypressText;

 }



    }
