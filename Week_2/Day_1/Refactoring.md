# Refactoring using Modules

## Modularizing

First, we add the code to export the function from the module:

```javascript
module.exports = assertEqual;
```

Then we add a `require` call to every file that requires the file we specify:

```javascript
const assertEqual = require('./assertEqual');
```

Within your project directory, create a folder called test. This is where we will store all of our test code. We will name each file the function name appended by 'Test'.

```
touch test/assertEqualTest.js
```

 ---

 **Mocha** gives us the `describe` and `it` functions. Each it is a test, and each test should have at least one assertion.


**Chai** is an assertion library. It gives us assertion functions so that we no longer have to use our `assertEqual` and other assertion functions that we implemented previously. Chai assertion functions are deliberately designed to play nice with testing frameworks like Mocha.

---

Creating an object to store a function is what `module.exports` does! We can make this shorter by exporting one object that holds all of the function in Lotide.

---

```javascript
const chai = require('chai'); // 1
const assert = chai.assert;

const shouldBuyCar = require('../shouldBuyCar.js'); // 2

describe("#shouldBuyCar()", function() { // 3

  it("should return false if it's a hatchback", function() { // 4
    const car = {
      type: "hatchback"
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

});
```
For the above code we go through an example of setting up chai and mocha for testing.

1. Import chai so we can use it to assert our test.
2. Import the shouldBuyCar function that we're going to test.
3. Add a describe for the shouldBuyCar function that we're testing.
4. Add an expectation that the function should return false if it's a hatchback.

We run a test by going back to our main directory and running the command:

```./node_modules/mocha/bin/mocha

### Property value shorthands

Property value shorthands let you abbreviate the definition of a property in an object literal: If the name of the variable that specifies the property value is also the property key, then you can just write the key.

```javascript
const x = 4;
const y = 1;
const obj = { x, y };
// last line is equivalent to:
// const obj = { x: x, y: y}
```

```javascript
let cat = 'Miaow';
let dog = 'Woof';
let bird = 'Peet peet';

let someObject = {
  cat,
  dog,
  bird
}

console.log(someObject);

//{
//  cat: "Miaow",
//  dog: "Woof",
//  bird: "Peet peet"
//}
```

### Asynchronous Control Flow

In Node and JavaScript we can implement an "async" control flow. Using a callback function, we can allow multiple things to run at once so that functions can queue themselves to run.

This way, functions that perform their jobs faster can return before slower functions.