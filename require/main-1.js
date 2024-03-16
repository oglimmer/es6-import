console.log("main-1.js started")
const { Foo , Pi } = require('./other.js');
console.log("main-1.js all imports loaded")

const foo = new Foo();
foo.test();

console.log(Pi);
