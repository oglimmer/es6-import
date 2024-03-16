import { Pi } from './other.mjs';

console.log("started")

for (let i = 0 ; i < 3; i++) {
  const Foo = (await import('./other.mjs')).Foo;

  const other = new Foo();
  other.test();
}

console.log(Pi);
