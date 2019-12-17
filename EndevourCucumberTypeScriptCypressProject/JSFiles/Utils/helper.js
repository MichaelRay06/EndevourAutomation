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
const protractor_1 = require("protractor");
class Helper {
    constructor() {
        this.waitForElementToBePresent = (element) => __awaiter(this, void 0, void 0, function* () {
            return protractor_1.browser.wait(() => (element.isPresent()), 60000);
        });
        this.waitForElementToBeDisplayed = (element) => __awaiter(this, void 0, void 0, function* () {
            return protractor_1.browser.wait(() => (element.isDisplayed()), 60000);
        });
        this.waitForAction = (time) => __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.sleep(time);
        });
        this.waitForElementVisibility = (element) => __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.wait((protractor_1.ExpectedConditions.visibilityOf(element)), 30000);
        });
    }
}
exports.Helper = Helper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vVXRpbHMvSGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQWdFO0FBRWhFLE1BQWEsTUFBTTtJQUFuQjtRQUVJLDhCQUF5QixHQUFHLENBQU8sT0FBTyxFQUFDLEVBQUU7WUFDekMsT0FBTyxvQkFBTyxDQUFDLElBQUksQ0FBQyxHQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFELENBQUMsQ0FBQSxDQUFBO1FBRUQsZ0NBQTJCLEdBQUcsQ0FBTyxPQUFPLEVBQUMsRUFBRTtZQUMzQyxPQUFPLG9CQUFPLENBQUMsSUFBSSxDQUFDLEdBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUQsQ0FBQyxDQUFBLENBQUE7UUFHRCxrQkFBYSxHQUFFLENBQU8sSUFBSSxFQUFDLEVBQUU7WUFDekIsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFBLENBQUE7UUFFRCw2QkFBd0IsR0FBRSxDQUFPLE9BQU8sRUFBQyxFQUFFO1lBQ3ZDLG9CQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsK0JBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUdwRCxDQUFDLENBQUEsQ0FBQTtJQUtMLENBQUM7Q0FBQTtBQXhCRCx3QkF3QkMifQ==