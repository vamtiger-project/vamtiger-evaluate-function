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
const python_bridge_1 = require("python-bridge");
const vamtiger_get_file_data_1 = require("vamtiger-get-file-data");
let Python;
exports.default = (params) => __awaiter(this, void 0, void 0, function* () {
    const python = params.python;
    const options = !Python ? {} : undefined;
    const getPython = !Python || !Python.connected;
    let pythonCode;
    let pythonCodePath;
    if (getPython) {
        pythonCodePath = path_1.resolve(__dirname, '../../python/index.py');
        pythonCode = yield vamtiger_get_file_data_1.default(pythonCodePath, 'utf-8');
        options ? options.python = python : undefined;
        Python = python_bridge_1.pythonBridge(options);
        yield Python.ex([`${pythonCode}`]);
    }
    return Python;
});
//# sourceMappingURL=index.js.map