
import { Given,When, Then } from "cucumber";
import { browser } from "protractor";
import {GoogleHomePage} from "../pageObjects/GoogleHomePage.js";
import {GoogleSearchLinks} from "../pageObjects/GoogleSearchLinks.js";
import {CypressHomePage} from "../pageObjects/CypressHomePage.js";
import {CypressChildWindowPage} from "../pageObjects/CypressChildWindowPage.js"
let chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect; 
import chai from "chai";
import { async } from "q"; 


let cypressHomePage =new CypressHomePage();
let cypressChildWindowPage = new CypressChildWindowPage();
var expect = chai.expect;






  When('I click on docs link', async ()=> {
    await cypressHomePage.clickDocsLink(); 
  });



  Then('a child window opened and I switch to it', async () => {
    await browser.getAllWindowHandles().then(function (handles) {
         browser.swithchTo().window(handles[1]).then(function () {
 
  });


  Then('I verify its page title as cypress {string}', async (expected_child_Window_Title) => {
  await  browser.getTitle().then(function(chidWindowTitle){
        console.log(chidWindowTitle);
        expect(chidWindowTitle).to.eventually.includes(expected_child_Window_Title);

  });

  Then('I could very that the child window page content has an {string}', async (expected_Text_Content)=> {
   await  cypressChildWindowPage.getChidPageTextContent ().then(function(childWindowText){
        expect(childWindowText).to.eventually.equal(expected_Text_Content);


  });

  When('verified, I close the child window', async ()=> {
    await  browser.close();
 

});


  When('I switch back to parent window', async () =>{
   await  browser.swithTo().window(handles[0]).then(function(){

  
  });



  Then('I verify the page title as {string}', async (expected_Parent_window_title) => {
  await browser.getTitle().then(function(actual_parentWindowTitle){
       console.log(actual_parentWindowTitle);
       expect(actual_parentWindowTitle).to.eventually.includes(expected_Parent_window_title);

   })
})
})
   
})
})
})
  });