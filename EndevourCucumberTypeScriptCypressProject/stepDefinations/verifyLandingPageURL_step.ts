import { Given,When, Then } from "cucumber";
import { browser } from "protractor";
import {GoogleHomePage} from "../pageObjects/GoogleHomePage.js";
import {GoogleSearchLinks} from "../pageObjects/GoogleSearchLinks.js";
import {CypressHomePage} from "../pageObjects/CypressHomePage.js";
import {Helper} from "../Utils/Helper.js"


let chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect; 
import chai from "chai";
import { async } from "q";

let help=new Helper();

let cypressHomePage = new CypressHomePage();
let googleHomePage = new GoogleHomePage();
let googleSearchLinks=new GoogleSearchLinks();
//var  utils =require ('../pageObjects/Utils');
var expect = chai.expect;


     
Given('I navigated to site', async () =>{
     await  browser.get("https://www.google.com/" ).then(function(){
     
     })
   
      });


      When('I typed in {string} in the search box', async (searchText)=> {
       await googleHomePage.googleTextField(searchText).then(function(){
        help.waitForAction(6000);
       })
      
       
      });

      When('enter to search text', async ()=> {
       await googleHomePage.clickToSearch().then(function(){
        help.waitForAction(6000);

       })
      });



      When('I am on google search links, I select and click on link to search', async ()=> {
        await googleSearchLinks.selectSearchText().then(function(){
          help.waitForAction(6000);
        })
      });


      When('I am on cypress landing page I verify the {string}', async (PageTitle)=> {
               await browser.getTitle().then(function(cypressLandingPageTitle){
               
                console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>' +cypressLandingPageTitle);
                expect(cypressLandingPageTitle).to.eventually.includes(PageTitle);
                help.waitForAction(6000);

               })
              
      });

      
      Then('I could verify the current url has a text {string}', async (currentURL_content)=> {
              await browser.getCurrentUrl().then(function(CypressLandingURL){
                console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>' +CypressLandingURL)
                     expect(CypressLandingURL).to.eventually.includes(currentURL_content);
                     help.waitForAction(6000);
                    });
                     await cypressHomePage.moveToWindowPopUp().then(function(){
                      help.waitForAction(6000);
                     })
                     await cypressHomePage.rejectWindowPopUp().then(function(){
                      help.waitForAction(6000);
                    })

              });     