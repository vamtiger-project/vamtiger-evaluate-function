import { parse } from 'mathjs';

export default async (params: Params) => {
    const formula = params.formula;
    const parsedFormula = parse(formula);
    const compiledFormula = parsedFormula.compile();
    const value = compiledFormula.eval();

    return value;
}

export interface Params {
    formula: string;
}