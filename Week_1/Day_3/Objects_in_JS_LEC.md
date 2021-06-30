# W01D03 - Objects in JS

## Instructor: Andy Lindsay

### Lecture Recording: [Zoom](https://us02web.zoom.us/rec/play/QLjuX7E-v2mpphvlIpg9HOTHMknkfkC-GZwk-lTe6FwwKXLCuznZQEQ4GWHUZNg8VALIncOY2Ms_gkKu.C0uvRlW25glymUBj?startTime=1622046134000&_x_zm_rtaid=v10nmqXCSvuptb8_8zb87A.1624466226687.16bd702b2aaf97a07f125edf0ed38aa6&_x_zm_rhtaid=411)

### To Do
- [x] Review primitive types
- [x] Objects!
- [x] Passing primitives and objects to functions
- [x] Functions inside objects (using `this`)
- [x] Object iteration with `for..in`

```javascript
//primitives
const str = 'string';
const num = 7;
const bool = false;
const nul = null;
const undef = undefined;
const symb = Symbol('hello');
const bigint = 8469832n;

//not primitives
const obj = {};
const arr = [];
```
Primitives are immutable (cannot be changed). You can assign a different value to a primitive, however this erases its current value completely.


```javascript
const changeToTen = function(num){
  num = 10;
  console.log('inside the function', num);
};

const myNumber = 5;
changeToTen(myNumber);

changeToTen(myNumber);
console.log(`after the function call`, myNumber);

```
  Primitives are passed "by value", they get copied

```javascript
const changeMyObj = function(obj) {
  obj.name = 'Bob';
  console.log('inside the function', obj);
  // outputs { name: 'Bob'}
}
const myObj = {
  name: 'Alice';
};

console.log('before the function call', myObj);
// outputs { name: 'Alice'}
changeMyObj(myObj);
console.log('after the function call', myObj);
// outputs { name: 'Bob' }
```
Objects are passed "by reference", the function gets our actual object. In the above example, the name Alice is changed to Bob. This is not a copy.

Every time a function is created, it is stored in memory. By creating an object, you are making a reference to the object in memory. Every time an array, an object, or a function is passed into a function, the function get a copy of the actual thing itself. This means we can change its value.

Objects are completely mutable. Everything inside an object can be easily changed.

```javascript
// the constant refers to a pointer, it is the only thing that will not change, while the key-value pairs within can change

const studentObj = {
  name: 'Alice';
  age: 23;
  hasDog = true;
};
```
In the above example, you cannot assign `studentObj` to a new object.

Check out [phythontutor](pythontutor.com)!

### Functions inside objects are methods.