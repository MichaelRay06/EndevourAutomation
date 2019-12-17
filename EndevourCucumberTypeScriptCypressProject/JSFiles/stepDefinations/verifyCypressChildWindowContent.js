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
const CypressChildWindowPage_js_1 = require("../pageObjects/CypressChildWindowPage.js");
const chai_1 = __importDefault(require("chai"));
var expect = chai_1.default.expect;
let cypressHomePage = new CypressHomePage_js_1.CypressHomePage();
let googleHomePage = new GoogleHomePage_js_1.GoogleHomePage();
let googleSearchLinks = new GoogleSearchLinks_js_1.GoogleSearchLinks();
let cypressChildWindowPage = new CypressChildWindowPage_js_1.CypressChildWindowPage();
var expect = chai_1.default.expect;
cucumber_1.When('I click on docs link', () => __awaiter(void 0, void 0, void 0, function* () {
    yield cypressHomePage.clickDocsLink();
}));
cucumber_1.Then('a child window opened and I switch to it', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.getAllWindowHandles().then(function (handles) {
        protractor_1.browser.swithchTo().window(handles[1]).then(function () {
        });
        cucumber_1.Then('I verify its page title as cypress {string}', (expected_child_Window_Title) => __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.getTitle().then(function (chidWindowTitle) {
                console.log(chidWindowTitle);
                expect(chidWindowTitle).to.eventually.includes(expected_child_Window_Title);
            });
            cucumber_1.Then('I could very that the child window page content has an {string}', (expected_Text_Content) => __awaiter(this, void 0, void 0, function* () {
                yield cypressChildWindowPage.getChidPageTextContent().then(function (childWindowText) {
                    expect(childWindowText).to.eventually.equal(expected_Text_Content);
                });
                cucumber_1.When('verified, I close the child window', () => __awaiter(this, void 0, void 0, function* () {
                    yield protractor_1.browser.close();
                }));
                cucumber_1.When('I switch back to parent window', () => __awaiter(this, void 0, void 0, function* () {
                    yield protractor_1.browser.swithTo().window(handles[0]).then(function () {
                    });
                    cucumber_1.Then('I verify the page title as {string}', (expected_Parent_window_title) => __awaiter(this, void 0, void 0, function* () {
                        yield protractor_1.browser.getTitle().then(function (actual_parentWindowTitle) {
                            console.log(actual_parentWindowTitle);
                            expect(actual_parentWindowTitle).to.eventually.includes(expected_Parent_window_title);
                        });
                    }));
                }));
            }));
        }));
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyaWZ5Q3lwcmVzc0NoaWxkV2luZG93Q29udGVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBEZWZpbmF0aW9ucy92ZXJpZnlDeXByZXNzQ2hpbGRXaW5kb3dDb250ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsdUNBQTRDO0FBQzVDLDJDQUFxQztBQUNyQyx3RUFBZ0U7QUFDaEUsOEVBQXNFO0FBQ3RFLDBFQUFrRTtBQUNsRSx3RkFBK0U7QUFDL0UsZ0RBQXdCO0FBRXhCLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFHekIsSUFBSSxlQUFlLEdBQUUsSUFBSSxvQ0FBZSxFQUFFLENBQUM7QUFDM0MsSUFBSSxjQUFjLEdBQUcsSUFBSSxrQ0FBYyxFQUFFLENBQUM7QUFDMUMsSUFBSSxpQkFBaUIsR0FBQyxJQUFJLHdDQUFpQixFQUFFLENBQUM7QUFDOUMsSUFBSSxzQkFBc0IsR0FBRyxJQUFJLGtEQUFzQixFQUFFLENBQUM7QUFDMUQsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQU92QixlQUFJLENBQUMsc0JBQXNCLEVBQUUsR0FBUSxFQUFFO0lBQ3JDLE1BQU0sZUFBZSxDQUFDLGFBQWEsRUFBRSxDQUFDO0FBQ3hDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFJSCxlQUFJLENBQUMsMENBQTBDLEVBQUUsR0FBUyxFQUFFO0lBQzFELE1BQU0sb0JBQU8sQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLE9BQU87UUFDckQsb0JBQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBRW5ELENBQUMsQ0FBQyxDQUFDO1FBR0gsZUFBSSxDQUFDLDZDQUE2QyxFQUFFLENBQU8sMkJBQTJCLEVBQUUsRUFBRTtZQUMxRixNQUFPLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsZUFBZTtnQkFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDN0IsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLDJCQUEyQixDQUFDLENBQUM7WUFHbEYsQ0FBQyxDQUFDLENBQUM7WUFJSCxlQUFJLENBQUMsaUVBQWlFLEVBQUUsQ0FBTyxxQkFBcUIsRUFBQyxFQUFFO2dCQUN0RyxNQUFPLHNCQUFzQixDQUFDLHNCQUFzQixFQUFHLENBQUMsSUFBSSxDQUFDLFVBQVMsZUFBZTtvQkFDaEYsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7Z0JBR3pFLENBQUMsQ0FBQyxDQUFDO2dCQUVILGVBQUksQ0FBQyxvQ0FBb0MsRUFBRSxHQUFRLEVBQUU7b0JBQ25ELE1BQU8sb0JBQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFHM0IsQ0FBQyxDQUFBLENBQUMsQ0FBQztnQkFHRCxlQUFJLENBQUMsZ0NBQWdDLEVBQUUsR0FBUyxFQUFFO29CQUNqRCxNQUFPLG9CQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFHbEQsQ0FBQyxDQUFDLENBQUM7b0JBSUgsZUFBSSxDQUFDLHFDQUFxQyxFQUFFLENBQU8sNEJBQTRCLEVBQUUsRUFBRTt3QkFDbkYsTUFBTSxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLHdCQUF3Qjs0QkFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDOzRCQUN0QyxNQUFNLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO3dCQUUxRixDQUFDLENBQUMsQ0FBQTtvQkFDTCxDQUFDLENBQUEsQ0FBQyxDQUFBO2dCQUNGLENBQUMsQ0FBQSxDQUFDLENBQUE7WUFFRixDQUFDLENBQUEsQ0FBQyxDQUFBO1FBQ0YsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUNGLENBQUMsQ0FBQyxDQUFBO0FBQ0EsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9