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
const get_result_1 = require("./get-result");
const get_python_result_1 = require("./get-python-result");
const simplify = require('mathjs').simplify;
const regex = XRegExp('x', 'ig');
exports.default = (params) => __awaiter(this, void 0, void 0, function* () {
    const result = params.python ?
        yield get_python_result_1.default(params)
        :
            yield get_result_1.default(params);
    return result;
});
//# sourceMappingURL=index.js.map