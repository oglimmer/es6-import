const otherRef = require('./other.js');

const foo = new otherRef.Foo();
foo.test();

console.log(otherRef.Pi);
