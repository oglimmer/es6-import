"use strict";
console.log("main.ts started");
const { Foo, Pi } = require('./other');
console.log("main.ts imports loaded");
const other = new Foo();
other.test();
console.log(Pi);
