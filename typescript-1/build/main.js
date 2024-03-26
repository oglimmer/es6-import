"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("main.ts started");
const other_1 = require("./other");
console.log("main.ts imports loaded");
const other = new other_1.Foo();
other.test();
console.log(other_1.Pi);
