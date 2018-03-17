#!/usr/bin/env node
import Args = require('vamtiger-argv');
import evaluateFunction from '..';

const args = new Args();
const formula = args.next('--formula') as string;
const x = args.next('--x') as string;
const python = args.has('--python');
const kill = args.has('--kill');
const params = {
    formula,
    x,
    python,
    kill
}

if (!formula)
    throw new Error('No formula defined');
else if (!x)
    throw new Error('No x value defined');
else
    main().catch(handleError);

async function main() {
    const result = await evaluateFunction(params);

    console.log(result.value);
}

function handleError(error: Error) {
    console.error(error);

    process.exit(0);
}