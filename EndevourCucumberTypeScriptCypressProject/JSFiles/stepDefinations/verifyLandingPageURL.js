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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const GoogleHomePage_js_1 = require("../pageObjects/GoogleHomePage.js");
const GoogleSearchLinks_js_1 = require("../pageObjects/GoogleSearchLinks.js");
const CypressHomePage_js_1 = require("../pageObjects/CypressHomePage.js");
const chai_1 = __importDefault(require("chai"));
var expect = chai_1.default.expect;
let cypressHomePage = new CypressHomePage_js_1.CypressHomePage();
let googleHomePage = new GoogleHomePage_js_1.GoogleHomePage();
let googleSearchLinks = new GoogleSearchLinks_js_1.GoogleSearchLinks();
//var  utils =require ('../pageObjects/Utils');
var expect = chai_1.default.expect;
cucumber_1.Given('I navigated to site', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get("https://www.google.com/");
}));
cucumber_1.When('I typed in {string} in the search box', (searchText) => __awaiter(void 0, void 0, void 0, function* () {
    yield googleHomePage.googleTextField(searchText);
}));
cucumber_1.When('enter to search text', () => __awaiter(void 0, void 0, void 0, function* () {
    yield googleHomePage.clickToSearch();
}));
cucumber_1.When('I am on google search links, I select and click on link to search', () => __awaiter(void 0, void 0, void 0, function* () {
    yield googleSearchLinks.selectSearchText();
}));
cucumber_1.When('I am on cypress landing page I verify the {string}', (PageTitle) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.getTitle().then(function (cypressLandingPageTitle) {
        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>' + cypressLandingPageTitle);
        expect(cypressLandingPageTitle).to.eventually.includes(PageTitle);
    });
}));
cucumber_1.Then('I could verify the current url has a text {string}', (currentURL_content) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.getCurrentUrl().then(function (CypressLandingURL) {
        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>' + CypressLandingURL);
        expect(CypressLandingURL).to.eventually.includes(currentURL_content);
    });
    cucumber_1.When('window alert opened  I click to reject alert', () => __awaiter(void 0, void 0, void 0, function* () {
        cypressHomePage.moveToWindowPopUp();
        cypressHomePage.rejectWindowPopUp();
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyaWZ5TGFuZGluZ1BhZ2VVUkwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvdmVyaWZ5TGFuZGluZ1BhZ2VVUkwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNEM7QUFDNUMsMkNBQXFDO0FBQ3JDLHdFQUFnRTtBQUNoRSw4RUFBc0U7QUFDdEUsMEVBQWtFO0FBQ2xFLGdEQUF3QjtBQUV4QixJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBRXpCLElBQUksZUFBZSxHQUFHLElBQUksb0NBQWUsRUFBRSxDQUFDO0FBQzVDLElBQUksY0FBYyxHQUFHLElBQUksa0NBQWMsRUFBRSxDQUFDO0FBQzFDLElBQUksaUJBQWlCLEdBQUMsSUFBSSx3Q0FBaUIsRUFBRSxDQUFDO0FBQzlDLCtDQUErQztBQUMvQyxJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBSW5CLGdCQUFLLENBQUMscUJBQXFCLEVBQUUsR0FBUyxFQUFFO0lBQ3pDLE1BQU8sb0JBQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUUsQ0FBQztBQUc5QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBR0gsZUFBSSxDQUFDLHVDQUF1QyxFQUFFLENBQU8sVUFBVSxFQUFDLEVBQUU7SUFDakUsTUFBTSxjQUFjLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRWxELENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsc0JBQXNCLEVBQUUsR0FBUSxFQUFFO0lBQ3RDLE1BQU0sY0FBYyxDQUFDLGFBQWEsRUFBRSxDQUFDO0FBQ3RDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFJSCxlQUFJLENBQUMsbUVBQW1FLEVBQUUsR0FBUSxFQUFFO0lBQ2xGLE1BQU0saUJBQWlCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztBQUM3QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBR0gsZUFBSSxDQUFDLG9EQUFvRCxFQUFFLENBQU8sU0FBUyxFQUFDLEVBQUU7SUFDckUsTUFBTSxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLHVCQUF1QjtRQUU3RCxPQUFPLENBQUMsR0FBRyxDQUFDLG1EQUFtRCxHQUFFLHVCQUF1QixDQUFDLENBQUM7UUFDMUYsTUFBTSxDQUFDLHVCQUF1QixDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFbkUsQ0FBQyxDQUFDLENBQUE7QUFFWCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBR0UsZUFBSSxDQUFDLG9EQUFvRCxFQUFFLENBQU8sa0JBQWtCLEVBQUMsRUFBRTtJQUNwRixNQUFNLG9CQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsaUJBQWlCO1FBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUMsOENBQThDLEdBQUUsaUJBQWlCLENBQUMsQ0FBQTtRQUN6RSxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBRTVFLENBQUMsQ0FBQyxDQUFBO0lBQ0YsZUFBSSxDQUFDLDhDQUE4QyxFQUFFLEdBQVEsRUFBRTtRQUM3RCxlQUFlLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUNwQyxlQUFlLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUV0QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRVgsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9