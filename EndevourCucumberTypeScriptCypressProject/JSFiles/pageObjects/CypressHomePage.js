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
class CypressHomePage {
    constructor() {
        this.button = protractor_1.element(protractor_1.by.css('#adroll_consent_banner > div.adroll_consent_notice'));
        this.rejectButton = protractor_1.element(protractor_1.by.css('#adroll_reject > div'));
        //docLINK= element(by.xpath('//ul[2]/li[3]/a'));
        this.linkTextDocLink = protractor_1.element(protractor_1.by.linkText('Docs'));
        this.moveToWindowPopUp = () => __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(this.button), 10000);
            yield protractor_1.browser.actions().mouseMove(this.button).perform();
        });
        this.rejectWindowPopUp = () => __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(this.rejectButton), 10000);
            yield protractor_1.browser.actions().mouseMove(this.rejectButton).perform();
            yield this.rejectButton.click();
        });
        this.clickDocsLink = () => __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(this.linkTextDocLink), 10000);
            yield protractor_1.browser.actions().mouseMove(this.linkTextDocLink).perform();
            yield this.linkTextDocLink.click();
        });
    }
}
exports.CypressHomePage = CypressHomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3lwcmVzc0hvbWVQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvQ3lwcmVzc0hvbWVQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTBFO0FBRTFFLE1BQWEsZUFBZTtJQUE1QjtRQUlLLFdBQU0sR0FBRSxvQkFBTyxDQUFFLGVBQUUsQ0FBQyxHQUFHLENBQUMsb0RBQW9ELENBQUMsQ0FBQyxDQUFDO1FBQy9FLGlCQUFZLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztRQUN2RCxnREFBZ0Q7UUFDaEQsb0JBQWUsR0FBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUsvQyxzQkFBaUIsR0FBRSxHQUFRLEVBQUU7WUFDekIsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQywrQkFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkQsTUFBTyxvQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFHaEUsQ0FBQyxDQUFBLENBQUM7UUFHRixzQkFBaUIsR0FBRSxHQUFRLEVBQUU7WUFDNUIsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQywrQkFBRSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN2RSxNQUFNLG9CQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUMvRCxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFHaEMsQ0FBQyxDQUFBLENBQUM7UUFFQyxrQkFBYSxHQUFHLEdBQVEsRUFBRTtZQUMxQixNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLCtCQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNsRSxNQUFNLG9CQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNsRSxNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7UUFTckMsQ0FBQyxDQUFBLENBQUE7SUFHSCxDQUFDO0NBQUE7QUEzQ0QsMENBMkNDIn0=