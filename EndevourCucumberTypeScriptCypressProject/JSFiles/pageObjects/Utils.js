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
module.exports = {};
getURL: (url) => __awaiter(void 0, void 0, void 0, function* () {
    return yield protractor_1.browser.get(url);
});
getPageTitle: () => __awaiter(void 0, void 0, void 0, function* () {
    return yield protractor_1.browser.getTitle();
});
getCurrentURLContent: () => __awaiter(void 0, void 0, void 0, function* () {
    return protractor_1.browser.getCurrentUrl();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9VdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFvQztBQUNwQyxNQUFNLENBQUMsT0FBTyxHQUFDLEVBS2QsQ0FBQztBQUVFLE1BQU0sRUFBRSxDQUFPLEdBQUcsRUFBQyxFQUFFO0lBQ25CLE9BQU8sTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUk3QixDQUFDLENBQUEsQ0FBQztBQUVGLFlBQVksRUFBRyxHQUFRLEVBQUU7SUFDeEIsT0FBTyxNQUFNLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7QUFHakMsQ0FBQyxDQUFBLENBQUM7QUFDRixvQkFBb0IsRUFBRSxHQUFPLEVBQUU7SUFFM0IsT0FBTyxvQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO0FBR2xDLENBQUMsQ0FBQSxDQUFDIn0=