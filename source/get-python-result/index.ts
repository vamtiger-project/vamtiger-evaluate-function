import * as XRegExp from 'xregexp';
import getPython from '../get-python';
import { MainParams as Params, Result, PythonVersion } from '../types';

const regex = XRegExp('x', 'ig');

export default async (params: Params) => {
    const formula = params.formula;
    const x = params.x.toString();
    const keepAlive = params.keepAlive;
    const substitutedFormula = isNaN(Number(x)) ? XRegExp.replace(formula, regex, `(${x})`) : undefined;
    const expression = substitutedFormula ? 
        `str(simplify(${substitutedFormula}))`
        :
        `str((${formula}).subs(x, ${x}))`;
    const Python = await getPython({
        python: PythonVersion.python3
    });
    const value = await Python([`${expression}`])
        .then((currentValue: string) => substitutedFormula ? currentValue : Number(currentValue));

    const result = {
        value
    };

    if (!keepAlive)
        Python.kill();

    return result;
}