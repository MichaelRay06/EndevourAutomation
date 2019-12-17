import {browser, ExpectedConditions as EC , } from "protractor";

export class Helper {

    waitForElementToBePresent = async (element)=> {
        return browser.wait(()=> (element.isPresent()),60000);
    }

    waitForElementToBeDisplayed = async (element)=> {
        return browser.wait(()=> (element.isDisplayed()),60000);
    }


    waitForAction= async (time)=>{
        browser.sleep(time);
    }

    waitForElementVisibility= async (element)=>{
        browser.wait((EC.visibilityOf(element)), 30000);
     

    }




}







