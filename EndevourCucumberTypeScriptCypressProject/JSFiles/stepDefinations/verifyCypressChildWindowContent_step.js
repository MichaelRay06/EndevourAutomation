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
const CypressHomePage_js_1 = require("../pageObjects/CypressHomePage.js");
const CypressChildWindowPage_js_1 = require("../pageObjects/CypressChildWindowPage.js");
let chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;
let cypressHomePage = new CypressHomePage_js_1.CypressHomePage();
let cypressChildWindowPage = new CypressChildWindowPage_js_1.CypressChildWindowPage();
var expect = chai.expect;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyaWZ5Q3lwcmVzc0NoaWxkV2luZG93Q29udGVudF9zdGVwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcERlZmluYXRpb25zL3ZlcmlmeUN5cHJlc3NDaGlsZFdpbmRvd0NvbnRlbnRfc3RlcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLHVDQUE0QztBQUM1QywyQ0FBcUM7QUFHckMsMEVBQWtFO0FBQ2xFLHdGQUErRTtBQUMvRSxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7QUFDNUQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUt6QixJQUFJLGVBQWUsR0FBRSxJQUFJLG9DQUFlLEVBQUUsQ0FBQztBQUMzQyxJQUFJLHNCQUFzQixHQUFHLElBQUksa0RBQXNCLEVBQUUsQ0FBQztBQUMxRCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBT3ZCLGVBQUksQ0FBQyxzQkFBc0IsRUFBRSxHQUFRLEVBQUU7SUFDckMsTUFBTSxlQUFlLENBQUMsYUFBYSxFQUFFLENBQUM7QUFDeEMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUlILGVBQUksQ0FBQywwQ0FBMEMsRUFBRSxHQUFTLEVBQUU7SUFDMUQsTUFBTSxvQkFBTyxDQUFDLG1CQUFtQixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsT0FBTztRQUNyRCxvQkFBTyxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFFbkQsQ0FBQyxDQUFDLENBQUM7UUFHSCxlQUFJLENBQUMsNkNBQTZDLEVBQUUsQ0FBTywyQkFBMkIsRUFBRSxFQUFFO1lBQzFGLE1BQU8sb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxlQUFlO2dCQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUM3QixNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsMkJBQTJCLENBQUMsQ0FBQztZQUVsRixDQUFDLENBQUMsQ0FBQztZQUVILGVBQUksQ0FBQyxpRUFBaUUsRUFBRSxDQUFPLHFCQUFxQixFQUFDLEVBQUU7Z0JBQ3RHLE1BQU8sc0JBQXNCLENBQUMsc0JBQXNCLEVBQUcsQ0FBQyxJQUFJLENBQUMsVUFBUyxlQUFlO29CQUNoRixNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztnQkFHekUsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsZUFBSSxDQUFDLG9DQUFvQyxFQUFFLEdBQVEsRUFBRTtvQkFDbkQsTUFBTyxvQkFBTyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUczQixDQUFDLENBQUEsQ0FBQyxDQUFDO2dCQUdELGVBQUksQ0FBQyxnQ0FBZ0MsRUFBRSxHQUFTLEVBQUU7b0JBQ2pELE1BQU8sb0JBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUdsRCxDQUFDLENBQUMsQ0FBQztvQkFJSCxlQUFJLENBQUMscUNBQXFDLEVBQUUsQ0FBTyw0QkFBNEIsRUFBRSxFQUFFO3dCQUNuRixNQUFNLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsd0JBQXdCOzRCQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7NEJBQ3RDLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLDRCQUE0QixDQUFDLENBQUM7d0JBRTFGLENBQUMsQ0FBQyxDQUFBO29CQUNMLENBQUMsQ0FBQSxDQUFDLENBQUE7Z0JBQ0YsQ0FBQyxDQUFBLENBQUMsQ0FBQTtZQUVGLENBQUMsQ0FBQSxDQUFDLENBQUE7UUFDRixDQUFDLENBQUEsQ0FBQyxDQUFBO0lBQ0YsQ0FBQyxDQUFDLENBQUE7QUFDQSxDQUFDLENBQUEsQ0FBQyxDQUFDIn0=