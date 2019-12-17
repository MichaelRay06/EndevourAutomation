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
class CypressChildWindowPage {
    constructor() {
        this.getCypressText = protractor_1.element(protractor_1.by.css('h1.article-title'));
        this.getChidPageTextContent = () => __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(this.getCypressText), 10000);
            return yield this.getCypressText.getText();
        });
        this.getChidTextContent = () => __awaiter(this, void 0, void 0, function* () {
            return yield this.getCypressText;
        });
    }
}
exports.CypressChildWindowPage = CypressChildWindowPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3lwcmVzc0NoaWxkV2luZG93UGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL0N5cHJlc3NDaGlsZFdpbmRvd1BhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBeUY7QUFDekYsTUFBYSxzQkFBc0I7SUFBbkM7UUFHSSxtQkFBYyxHQUFJLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFLbEQsMkJBQXNCLEdBQUcsR0FBUSxFQUFFO1lBQ2hDLE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsK0JBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ2hFLE9BQU8sTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2xELENBQUMsQ0FBQSxDQUFBO1FBQ0QsdUJBQWtCLEdBQUcsR0FBUSxFQUFFO1lBQzNCLE9BQU8sTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDO1FBRXhDLENBQUMsQ0FBQSxDQUFBO0lBSUUsQ0FBQztDQUFBO0FBbkJMLHdEQW1CSyJ9