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
const path_1 = require("path");
const chai_1 = require("chai");
const __1 = require("../..");
const XRegExp = require("xregexp");
const formula = '-x**2 + 6*x - 11';
const spaces = XRegExp('\\s+', 'g');
const evaluateFunctionPath = path_1.resolve(__dirname, '../../bin');
describe(`04-evaluate-function-python - should f(x) = ${formula} where`, function () {
    it(`f(2) = -3`, function () {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                formula,
                x: 2,
                python: true,
                keepAlive: true
            };
            const result = yield __1.default(params);
            const expected = -3;
            chai_1.expect(result).to.be.ok;
            chai_1.expect(result.value).to.equal(expected);
        });
    });
    it('f(-10) = -171', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                formula,
                x: -10,
                python: true,
                keepAlive: true
            };
            const result = yield __1.default(params);
            const expected = -171;
            chai_1.expect(result).to.be.ok;
            chai_1.expect(result.value).to.equal(expected);
        });
    });
    it('f(x - 3) = -x**2 + 12*x - 38', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                formula,
                x: 'x - 3',
                python: true,
                keepAlive: true
            };
            const result = yield __1.default(params);
            const value = XRegExp.replace(result.value, spaces, '');
            const expectedValue = XRegExp.replace('-x**2 + 12*x - 38', spaces, '');
            chai_1.expect(result).to.be.ok;
            chai_1.expect(value).to.equal(expectedValue);
        });
    });
    it('f(4x - 1) = -16*x**2 + 32*x - 18', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                formula,
                x: '4*x - 1',
                python: true
            };
            const result = yield __1.default(params);
            const value = XRegExp.replace(result.value, spaces, '');
            const expectedValue = XRegExp.replace('-16*x**2 + 32*x - 18', spaces, '');
            chai_1.expect(result).to.be.ok;
            chai_1.expect(value).to.equal(expectedValue);
        });
    });
});
//# sourceMappingURL=index.spec.js.map