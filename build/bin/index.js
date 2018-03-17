#!/usr/bin/env node
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
const Args = require("vamtiger-argv");
const __1 = require("..");
const args = new Args();
const formula = args.next('--formula');
const x = args.next('--x');
const python = args.has('--python');
const kill = args.has('--kill');
const params = {
    formula,
    x,
    python,
    kill
};
if (!formula)
    throw new Error('No formula defined');
else if (!x)
    throw new Error('No x value defined');
else
    main().catch(handleError);
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield __1.default(params);
        console.log(result.value);
    });
}
function handleError(error) {
    console.error(error);
    process.exit(0);
}
//# sourceMappingURL=index.js.map