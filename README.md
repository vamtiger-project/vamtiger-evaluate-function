# VAMTIGER Evaluate Function
[VAMTIGER Evaluate Function](https://github.com/vamtiger-project/vamtiger-evaluate-function) can evaluate a defined function.

## Installation
[VAMTIGER Evaluate Function](https://github.com/vamtiger-project/vamtiger-evaluate-function) can be installed using [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/lang/en/):
```bash
npm i --global vamtiger-evaluate-function 
```
or
```bash
yarn global vamtiger-evaluate-function
```

## Usage
Import or require a referece to [VAMTIGER Evaluate Function](https://github.com/vamtiger-project/vamtiger-evaluate-function) :
```typescript
import evaluateFunction from 'vamtiger-evaluate-function';
```
or
```javascript
const evaluateFunction = require('vamtiger-evaluate-function').default;
```

[VAMTIGER Evaluate Function](https://github.com/vamtiger-project/vamtiger-evaluate-function) can evaluate a defined function
```javascript
const result = evaluateFunction({
        formula: '-x^2 + 6x - 11',
        x: 2
    })
    .then(handleResult)
    .catch(handleError);
```

If [SymPy](http://www.sympy.org/en/index.html) is installed, the function can also be evaluated by specifying the **python** option:
```javascript
async someAsyncFunction function() {
    const result = evaluateFunction({
        formula: '-x**2 + 6*x - 11', // Python Syntax
        x: 2,
        python: true
    })
    .then(handleResult)
    .catch(handleError);
}
```

Since [VAMTIGER Evaluate Function](https://github.com/vamtiger-project/vamtiger-evaluate-function) returns a Promise, it can be more conveniently executed within an async function:
```javascript
async someAsyncFunction function() {
    const result = await evaluateFunction({
        formula: '-x^2 + 6x - 11',
        x: 2
    });
}
```

When installed globally, the result can be logged from the commandline:
```bash
vamtiger-evaluate-function --formula "-x^2 + 6x - 11" --x "4x - 1"
```
or

```bash
vamtiger-evaluate-function --formula "-x**2 + 6*x - 11" --x "4*x - 1" --python
```
