import { eval as evaluate } from 'mathjs';
import { parse } from 'algebra.js';
import * as XRegExp from 'xregexp';
import getValue from './get-value';
import getPython from './get-python';
import getResult from './get-result';
import getPythonResult from './get-python-result';
import { MainParams as Params, Result, Formula } from './types';

const simplify = require('mathjs').simplify;
const regex = XRegExp('x', 'ig');

export default async (params: Params) => {
    const result = params.python ? 
        await getPythonResult(params) 
        : 
        await getResult(params);

    return result;
};