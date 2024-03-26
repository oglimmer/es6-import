"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pi = exports.Foo = void 0;
class Foo {
    test() {
        console.log('test');
    }
}
exports.Foo = Foo;
exports.default = Foo;
const Pi = 3.14;
exports.Pi = Pi;
console.log("other.ts loaded");
