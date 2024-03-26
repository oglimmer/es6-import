console.log("main.ts started")
import { Foo, Pi } from './other';
console.log("main.ts imports loaded")

const other = new Foo();
other.test();

console.log(Pi);
