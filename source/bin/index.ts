#!/usr/bin/env node
import Args = require('vamtiger-argv');
import evaluateFunction from '..';

const args = new Args();
const formula = args.next('--formula') as string;
const x = args.next('--x') as string;

if (!formula)
    throw new Error('No formula defined');
else if (!x)
    throw new Error('No x value defined');
else
    main().catch(handleError);

async function main() {
    const result = await evaluateFunction({
        formula,
        x
    });

    console.log(result.value);
}

function handleError(error: Error) {
    console.error(error);

    throw error;
}