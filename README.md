# Understanding Node.js require and import

## require
- Node.js follows the commonJS module system (from 2009)
- goal was to split files
- was build-in nodejs from the beginning, works with browser as library+transpiler
- works with *.js or whatever your file is called
- "non lexical" - think about it as a pre-processor, it just add and RUNS(!) the code (from both perspective, the file that is required and the file that requires it)


## import
- introduced in ECMAScript 2015 is also known as ES6 and ECMAScript 6.
- you can import "ES6 modules" only
- can only be used within ES6 modules (should be *.mjs)
- if your file is not an ES6 module, add `"type": "module"` to your package.json
- works in nodes and browsers
- lexical - it's added as the JavaScript engine evaluates the code, it does not run it on import (see console.log in the example)

## Notes
- In Node.js, using both `require` and `import` concurrently is prohibited
