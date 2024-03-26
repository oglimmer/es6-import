class Foo {
    test() {
      console.log('test');
    }
  }
  
  export { Foo };
  export default Foo;
  
  const Pi = 3.14;
  
  export { Pi };
  
  console.log("other.ts loaded")
  