"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const GoogleHomePage_js_1 = require("../pageObjects/GoogleHomePage.js");
const GoogleSearchLinks_js_1 = require("../pageObjects/GoogleSearchLinks.js");
const CypressHomePage_js_1 = require("../pageObjects/CypressHomePage.js");
const Helper_js_1 = require("../Utils/Helper.js");
let chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;
let help = new Helper_js_1.Helper();
let cypressHomePage = new CypressHomePage_js_1.CypressHomePage();
let googleHomePage = new GoogleHomePage_js_1.GoogleHomePage();
let googleSearchLinks = new GoogleSearchLinks_js_1.GoogleSearchLinks();
//var  utils =require ('../pageObjects/Utils');
var expect = chai.expect;
cucumber_1.Given('I navigated to site', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get("https://www.google.com/").then(function () {
    });
}));
cucumber_1.When('I typed in {string} in the search box', (searchText) => __awaiter(void 0, void 0, void 0, function* () {
    yield googleHomePage.googleTextField(searchText).then(function () {
        help.waitForAction(6000);
    });
}));
cucumber_1.When('enter to search text', () => __awaiter(void 0, void 0, void 0, function* () {
    yield googleHomePage.clickToSearch().then(function () {
        help.waitForAction(6000);
    });
}));
cucumber_1.When('I am on google search links, I select and click on link to search', () => __awaiter(void 0, void 0, void 0, function* () {
    yield googleSearchLinks.selectSearchText().then(function () {
        help.waitForAction(6000);
    });
}));
cucumber_1.When('I am on cypress landing page I verify the {string}', (PageTitle) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.getTitle().then(function (cypressLandingPageTitle) {
        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>' + cypressLandingPageTitle);
        expect(cypressLandingPageTitle).to.eventually.includes(PageTitle);
        help.waitForAction(6000);
    });
}));
cucumber_1.Then('I could verify the current url has a text {string}', (currentURL_content) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.getCurrentUrl().then(function (CypressLandingURL) {
        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>' + CypressLandingURL);
        expect(CypressLandingURL).to.eventually.includes(currentURL_content);
        help.waitForAction(6000);
    });
    yield cypressHomePage.moveToWindowPopUp().then(function () {
        help.waitForAction(6000);
    });
    yield cypressHomePage.rejectWindowPopUp().then(function () {
        help.waitForAction(6000);
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyaWZ5TGFuZGluZ1BhZ2VVUkxfc3RlcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBEZWZpbmF0aW9ucy92ZXJpZnlMYW5kaW5nUGFnZVVSTF9zdGVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTRDO0FBQzVDLDJDQUFxQztBQUNyQyx3RUFBZ0U7QUFDaEUsOEVBQXNFO0FBQ3RFLDBFQUFrRTtBQUNsRSxrREFBeUM7QUFHekMsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO0FBQzVELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7QUFJekIsSUFBSSxJQUFJLEdBQUMsSUFBSSxrQkFBTSxFQUFFLENBQUM7QUFFdEIsSUFBSSxlQUFlLEdBQUcsSUFBSSxvQ0FBZSxFQUFFLENBQUM7QUFDNUMsSUFBSSxjQUFjLEdBQUcsSUFBSSxrQ0FBYyxFQUFFLENBQUM7QUFDMUMsSUFBSSxpQkFBaUIsR0FBQyxJQUFJLHdDQUFpQixFQUFFLENBQUM7QUFDOUMsK0NBQStDO0FBQy9DLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7QUFJekIsZ0JBQUssQ0FBQyxxQkFBcUIsRUFBRSxHQUFTLEVBQUU7SUFDbkMsTUFBTyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBRSxDQUFDLElBQUksQ0FBQztJQUVwRCxDQUFDLENBQUMsQ0FBQTtBQUVELENBQUMsQ0FBQSxDQUFDLENBQUM7QUFHSCxlQUFJLENBQUMsdUNBQXVDLEVBQUUsQ0FBTyxVQUFVLEVBQUMsRUFBRTtJQUNqRSxNQUFNLGNBQWMsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3JELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQyxDQUFDLENBQUE7QUFHSCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHNCQUFzQixFQUFFLEdBQVEsRUFBRTtJQUN0QyxNQUFNLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDekMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUxQixDQUFDLENBQUMsQ0FBQTtBQUNILENBQUMsQ0FBQSxDQUFDLENBQUM7QUFJSCxlQUFJLENBQUMsbUVBQW1FLEVBQUUsR0FBUSxFQUFFO0lBQ2xGLE1BQU0saUJBQWlCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDOUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFHSCxlQUFJLENBQUMsb0RBQW9ELEVBQUUsQ0FBTyxTQUFTLEVBQUMsRUFBRTtJQUNyRSxNQUFNLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsdUJBQXVCO1FBRTdELE9BQU8sQ0FBQyxHQUFHLENBQUMsbURBQW1ELEdBQUUsdUJBQXVCLENBQUMsQ0FBQztRQUMxRixNQUFNLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTFCLENBQUMsQ0FBQyxDQUFBO0FBRVgsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUdILGVBQUksQ0FBQyxvREFBb0QsRUFBRSxDQUFPLGtCQUFrQixFQUFDLEVBQUU7SUFDL0UsTUFBTSxvQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLGlCQUFpQjtRQUMzRCxPQUFPLENBQUMsR0FBRyxDQUFDLDhDQUE4QyxHQUFFLGlCQUFpQixDQUFDLENBQUE7UUFDekUsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ0YsTUFBTSxlQUFlLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDOUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDLENBQUMsQ0FBQTtJQUNGLE1BQU0sZUFBZSxDQUFDLGlCQUFpQixFQUFFLENBQUMsSUFBSSxDQUFDO1FBQzlDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQyxDQUFDLENBQUE7QUFFUixDQUFDLENBQUEsQ0FBQyxDQUFDIn0=