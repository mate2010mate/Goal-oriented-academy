function testScope() {
    if (true) {
      var x = 10;  // `var` is function-scoped
      let y = 20;  // `let` is block-scoped
      const z = 30; // `const` is block-scoped
    }
    
    console.log(x); // Output: 10 (because `var` is function-scoped, accessible outside the block)
    console.log(y); // Error: y is not defined (because `let` is block-scoped)
    console.log(z); // Error: z is not defined (because `const` is block-scoped)
  }
  
  testScope();
  