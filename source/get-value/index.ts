import { parse } from 'mathjs';
import { GetValueParams as Params } from '../types';

export default async (params: Params) => {
    const formula = params.formula;
    const parsedFormula = parse(formula);
    const compiledFormula = parsedFormula.compile();
    const value = compiledFormula.eval();

    return value;
}