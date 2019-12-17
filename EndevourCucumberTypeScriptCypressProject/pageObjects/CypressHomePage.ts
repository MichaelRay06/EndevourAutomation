import {browser, element, by,  ExpectedConditions as EC} from 'protractor'

export class CypressHomePage {



     button= element (by.css('#adroll_consent_banner > div.adroll_consent_notice'));
     rejectButton=  element(by.css('#adroll_reject > div'));
     //docLINK= element(by.xpath('//ul[2]/li[3]/a'));
     linkTextDocLink= element(by.linkText('Docs'));




    moveToWindowPopUp= async ()=> {
        await browser.wait(EC.visibilityOf(this.button),10000);
        await  browser.actions().mouseMove(this.button).perform();


  };


  rejectWindowPopUp= async ()=> {
   await browser.wait(EC.elementToBeClickable(this.rejectButton), 10000);
  await browser.actions().mouseMove(this.rejectButton).perform();
  await this.rejectButton.click();


  };

     clickDocsLink=  async ()=> {
     await browser.wait(EC.visibilityOf(this.linkTextDocLink), 10000);
    await browser.actions().mouseMove(this.linkTextDocLink).perform();
    await this.linkTextDocLink.click();








  }


}