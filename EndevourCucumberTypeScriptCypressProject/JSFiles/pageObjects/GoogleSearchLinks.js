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
class GoogleSearchLinks {
    constructor() {
        this.clickSelectLink = protractor_1.element(protractor_1.by.css('div:nth-child(2) > .rc .S3Uucc'));
        this.selectSearchText = () => __awaiter(this, void 0, void 0, function* () {
            // await browser.wait(EC.elementToBeClickable(this.clickSelectLink), 10000);
            yield this.clickSelectLink.click();
            return require('./CypressHomePage');
        });
    }
}
exports.GoogleSearchLinks = GoogleSearchLinks;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR29vZ2xlU2VhcmNoTGlua3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9Hb29nbGVTZWFyY2hMaW5rcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUF5RTtBQUV6RSxNQUFhLGlCQUFpQjtJQUE5QjtRQUdJLG9CQUFlLEdBQUUsb0JBQU8sQ0FBRSxlQUFFLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUMsQ0FBQztRQUlwRSxxQkFBZ0IsR0FBRyxHQUFRLEVBQUU7WUFDM0IsNEVBQTRFO1lBQzVFLE1BQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNuQyxPQUFPLE9BQU8sQ0FBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQSxDQUFBO0lBQ0QsQ0FBQztDQUFBO0FBWkQsOENBWUMifQ==