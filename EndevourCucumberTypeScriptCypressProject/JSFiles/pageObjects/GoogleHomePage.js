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
class GoogleHomePage {
    constructor() {
        this.googleTextBox = protractor_1.element(protractor_1.by.name('q'));
        this.googleTextField = (searchText) => __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(this.googleTextBox), 10000);
            yield this.googleTextBox.sendKeys(searchText);
        });
        this.clickToSearch = () => __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(this.googleTextBox), 10000);
            // await this.googleTextBox.sendKeys(protractor.Key.ARROW_DOWN);
            yield this.googleTextBox.sendKeys(protractor_1.protractor.Key.ENTER);
            return require('./GoogleSearchLinks');
        });
    }
}
exports.GoogleHomePage = GoogleHomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR29vZ2xlSG9tZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9Hb29nbGVIb21lUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFzRjtBQUN0RixNQUFhLGNBQWM7SUFBM0I7UUFHTyxrQkFBYSxHQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBR3hDLG9CQUFlLEdBQUUsQ0FBTyxVQUFVLEVBQUUsRUFBRTtZQUNsQyxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLCtCQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQztZQUM5RCxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRzVDLENBQUMsQ0FBQSxDQUFDO1FBRUYsa0JBQWEsR0FBRSxHQUFRLEVBQUU7WUFDeEIsTUFBTyxvQkFBTyxDQUFDLElBQUksQ0FBQywrQkFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUQsZ0VBQWdFO1lBQy9ELE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsdUJBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekQsT0FBTyxPQUFPLENBQUUscUJBQXFCLENBQUMsQ0FBQztRQUV6QyxDQUFDLENBQUEsQ0FBQztJQU1aLENBQUM7Q0FBQTtBQXpCRCx3Q0F5QkMifQ==