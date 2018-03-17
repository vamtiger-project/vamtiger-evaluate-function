import { resolve as resolvePath } from 'path';
import { expect } from 'chai';
import bash from 'vamtiger-bash';
import evaluateFunction from '../..';
import * as XRegExp from 'xregexp';

const formula = '-x**2 + 6*x - 11';
const spaces = XRegExp('\\s+', 'g');
const evaluateFunctionPath = resolvePath(
    __dirname,
    '../../bin'
);

describe(`03-evaluate-function-python - should f(x) = ${formula} where`, function () {
    it(`f(2) = -3`, async function () {
        const params = {
            formula,
            x: 2,
            python: true,
            keepAlive: true
        };
        const evaluateFunctionComman = `node ${evaluateFunctionPath} --formula \"${formula}\" --x \"${params.x}\" --python`;
        const bashResult = await bash(evaluateFunctionComman);
        const expected = -3;

        expect(bashResult).to.be.ok;
        expect(Number(bashResult)).to.equal(expected);
    });

    it('f(-10) = -171', async function () {
        const params = {
            formula,
            x: -10,
            python: true,
            keepAlive: true
        };
        const evaluateFunctionComman = `node ${evaluateFunctionPath} --formula \"${formula}\" --x \"${params.x}\" --python`;
        const bashResult = await bash(evaluateFunctionComman);
        const expected = -171;

        expect(bashResult).to.be.ok;
        expect(Number(bashResult)).to.equal(expected);
    });

    it('f(x - 3) = -x**2 + 12*x - 38', async function () {
        const params = {
            formula,
            x: 'x - 3',
            python: true,
            keepAlive: true
        };
        const evaluateFunctionComman = `node ${evaluateFunctionPath} --formula \"${formula}\" --x \"${params.x}\" --python`;
        const bashResult = await bash(evaluateFunctionComman);
        const bashValue = XRegExp.replace(bashResult, spaces, '');
        const expectedValue = XRegExp.replace('-x**2 + 12*x - 38', spaces, '');

        expect(bashResult).to.be.ok;
        expect(bashValue).to.equal(expectedValue);
    });

    it('f(4x - 1) = -16*x**2 + 32*x - 18', async function () {
        const params = {
            formula,
            x: '4*x - 1',
            python: true
        };
        const evaluateFunctionComman = `node ${evaluateFunctionPath} --formula \"${formula}\" --x \"${params.x}\" --python`;
        const bashResult = await bash(evaluateFunctionComman);
        const bashValue = XRegExp.replace(bashResult, spaces, '');
        const expectedValue = XRegExp.replace('-16*x**2 + 32*x - 18', spaces, '');

        expect(bashResult).to.be.ok;
        expect(bashValue).to.equal(expectedValue);
    });
});