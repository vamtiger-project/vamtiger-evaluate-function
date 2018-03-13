"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mathjs_1 = require("mathjs");
exports.default = (params) => __awaiter(this, void 0, void 0, function* () {
    const formula = params.formula;
    const parsedFormula = mathjs_1.parse(formula);
    const compiledFormula = parsedFormula.compile();
    const value = compiledFormula.eval();
    return value;
});
//# sourceMappingURL=index.js.map