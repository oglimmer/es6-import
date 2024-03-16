class Foo {
  test() {
    console.log('test');
  }
}

const Pi = 3.14;

exports.Foo = Foo
exports.Pi = Pi

console.log("other.js loaded")
