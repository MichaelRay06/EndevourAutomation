import {browser, element, by, ExpectedConditions as EC} from 'protractor'

export class GoogleSearchLinks {


    clickSelectLink= element (by.css('div:nth-child(2) > .rc .S3Uucc'));



    selectSearchText = async ()=> {
      // await browser.wait(EC.elementToBeClickable(this.clickSelectLink), 10000);
      await this.clickSelectLink.click();
      return require ('./CypressHomePage');
}
}