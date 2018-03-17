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
const XRegExp = require("xregexp");
const get_python_1 = require("../get-python");
const types_1 = require("../types");
const regex = XRegExp('x', 'ig');
exports.default = (params) => __awaiter(this, void 0, void 0, function* () {
    const formula = params.formula;
    const x = params.x.toString();
    const keepAlive = params.keepAlive;
    const substitutedFormula = isNaN(Number(x)) ? XRegExp.replace(formula, regex, `(${x})`) : undefined;
    const expression = substitutedFormula ?
        `str(simplify(${substitutedFormula}))`
        :
            `str((${formula}).subs(x, ${x}))`;
    const Python = yield get_python_1.default({
        python: types_1.PythonVersion.python3
    });
    const value = yield Python([`${expression}`])
        .then((currentValue) => substitutedFormula ? currentValue : Number(currentValue));
    const result = {
        value
    };
    if (!keepAlive)
        Python.kill();
    return result;
});
//# sourceMappingURL=index.js.map