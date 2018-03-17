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
const algebra_js_1 = require("algebra.js");
const XRegExp = require("xregexp");
const get_value_1 = require("../get-value");
const simplify = require('mathjs').simplify;
const regex = XRegExp('x', 'ig');
exports.default = (params) => __awaiter(this, void 0, void 0, function* () {
    const formula = params.formula;
    const x = params.x.toString();
    const simplifiedFormula = simplify(formula).toString();
    const substitutedFormula = XRegExp.replace(simplifiedFormula, regex, `(${x})`);
    const value = yield get_value_1.default({
        formula: substitutedFormula
    })
        .catch(() => algebra_js_1.parse(substitutedFormula).toString());
    const result = {
        formula: {
            raw: formula,
            substituted: substitutedFormula,
            simplified: simplifiedFormula
        },
        value
    };
    return result;
});
//# sourceMappingURL=index.js.map