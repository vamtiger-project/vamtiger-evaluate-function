import { resolve as resolvePath } from 'path';
import { expect } from 'chai';
import bash from 'vamtiger-bash';
import evaluateFunction from '../..';
import * as XRegExp from 'xregexp';

const formula = '-x^2 + 6x - 11';
const spaces = XRegExp('\\s+', 'g');
const evaluateFunctionPath = resolvePath(
    __dirname,
    '../../bin'
);

describe(`01-evaluate-formula - should f(x) = ${formula} where`, function () {
    it(`f(2) = -3`, async function () {
        const params = {
            formula,
            x: 2
        };
        const evaluateFunctionComman = `node ${evaluateFunctionPath} --formula \"${formula}\" --x \"${params.x}\"`;
        const result = await evaluateFunction(params);
        const bashResult = await bash(evaluateFunctionComman);
        const expected = -3;

        expect(result).to.be.ok;
        expect(result.value).to.equal(expected);
        expect(Number(bashResult)).to.equal(expected);
    });

    it('f(-10) = -171', async function () {
        const params = {
            formula,
            x: -10
        };
        const evaluateFunctionComman = `node ${evaluateFunctionPath} --formula \"${formula}\" --x \"${params.x}\"`;
        const result = await evaluateFunction(params);
        const bashResult = await bash(evaluateFunctionComman);
        const expected = -171;

        expect(result).to.be.ok;
        expect(result.value).to.equal(expected);
        expect(Number(bashResult)).to.equal(expected);
    });

    it('f(x - 3) = -x^2 + 12x - 38', async function () {
        const params = {
            formula,
            x: 'x - 3'
        };
        const evaluateFunctionComman = `node ${evaluateFunctionPath} --formula \"${formula}\" --x \"${params.x}\"`;
        const result = await evaluateFunction(params);
        const bashResult = await bash(evaluateFunctionComman);
        const value = XRegExp.replace(result.value, spaces, '');
        const bashValue = XRegExp.replace(bashResult, spaces, '');
        const expectedValue = XRegExp.replace('-x^2 + 12x - 38', spaces, '');

        expect(result).to.be.ok;
        expect(value).to.equal(expectedValue);
        expect(bashValue).to.equal(expectedValue);
    });

    it('f(4x - 1) = -16x^2 + 32x -18', async function () {
        const params = {
            formula,
            x: '4x - 1'
        };
        const evaluateFunctionComman = `node ${evaluateFunctionPath} --formula \"${formula}\" --x \"${params.x}\"`;
        const result = await evaluateFunction(params);
        const bashResult = await bash(evaluateFunctionComman);
        const value = XRegExp.replace(result.value, spaces, '');
        const bashValue = XRegExp.replace(bashResult, spaces, '');
        const expectedValue = XRegExp.replace('-16x^2 + 32x -18', spaces, '');

        expect(result).to.be.ok;
        expect(value).to.equal(expectedValue);
        expect(bashValue).to.equal(expectedValue);
    });
});