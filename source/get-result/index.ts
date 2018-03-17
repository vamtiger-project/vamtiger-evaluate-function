import { eval as evaluate } from 'mathjs';
import { parse } from 'algebra.js';
import * as XRegExp from 'xregexp';
import getValue from '../get-value';
import { MainParams as Params, Result, Formula } from '../types';

const simplify = require('mathjs').simplify;
const regex = XRegExp('x', 'ig');

export default async (params: Params) => {
    const formula = params.formula;
    const x = params.x.toString();
    const simplifiedFormula = simplify(formula).toString();
    const substitutedFormula = XRegExp.replace(simplifiedFormula, regex, `(${x})`);
    const value = await getValue({
            formula: substitutedFormula
        })
        .catch(() => parse(substitutedFormula).toString());
    const result = {
        formula: {
            raw: formula,
            substituted: substitutedFormula,
            simplified: simplifiedFormula
        },
        value
    };

    return result;
};