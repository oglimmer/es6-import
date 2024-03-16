console.log("main-1.mjs started")
import { Foo, Pi } from './other.mjs';
console.log("main-1.mjs imports loaded")

const other = new Foo();
other.test();

console.log(Pi);
