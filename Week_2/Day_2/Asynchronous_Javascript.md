# Asynchronous Javascript

Cmd + D - > Put cursors at the next instance of words
Ctrl + C -> Stop program from running in terminal

`setTimeout()` takes in two parameters. The first takes in the name of a function, and the second takes in a time of delay in milliseconds. (eg. `setTimeout(function, 4000);`)

```javascript
// Create a variable to hold start time
const start = Date.now();
console.log("start: ", start);

// Function definition, does not run yet
function sleepFor(sleepDuration) {
  const nowObject = new Date();
  const startTime = nowObject.getTime();
  while(new Date().getTime() < startTime + sleepDuration) {
    // Do nothing
    // Check that the current time is less than
    // the current time
  }
};

// Function definition, does not run yet
const nameOfFunction = () => {
  console.log('monkey fuzz!');
};

// Function call schedules a task to happen
// Schedules a callback to run sometime in the future
setTimeout(nameOfFunction, 4000);

console.log("presleep");
// This function is now called
sleepFor(10000); // blocking
console.log("postsleep");

const end = Date.now();
// This is the exact time the main thread ends
console.log("end: ", end);
// This is the duration of the main thread
console.log("duration ", end - start);

// => start, presleep, postsleep, end, monkey fuzz!
```

Follow the parser and build a mental model of the event loop. It is only when the main thread is finished when any scheduled tasks can start.

`setTimeout()` runs by itself but its job is to schedule something to happen later. These scheduled tasks then get executed after the main thread's functions are executed, no matter what. The browser is asynchronous!

Beware of premature optimizations! That is when you try to shave off a bit of time to run things but in the grand scheme of things, it won't make much of a difference.

```javascript
// Function definition
function doAction(name, duration, next) {
  const now = new Date();
  // Check the time in milliseconds when something runs
  console.log(`${now.getTime() - start}: Starting ${name}`);
  // Defines an anonymous function, schedules a callback, executes it at 'duration' milliseconds in the future
  setTimeout( () => {
    const then = new Date();
    console.log(`${then.getTime() - start}: Ending ${name}`);
  }, duration );
}

doAction("Look", 500);
doAction("Get Up", 5000);
doAction("Walk", 8000);
doAction("Open The Door", 3000);
doAction("Walk Through The Door", 3000);
// => start:
// => Starting: Look, Get Up, Walk, Open The Door, Walk Through Door
// => end:
// => duration:
// => Ending: Look, Open The Door, Walk Through Door, Get Up, Walk

const end = Date.now();
console.log("end: ", end);
console.log(" ", );
console.log("I am done being programmed.");

```

Similar to `setTimeout()` is `setInterval()` for scheduling tasks in the event loop. We do this to allow separate functions to run simultaneously, especially when we do not know how long it takes to run.

This will be useful for `fs.readFile();` or `$.ajax()`. A callback function is passed into these and is only executed once the main thread is finished. The callback function is then executed in the event loop.

When something is being called from the event loop, you cannot get a return value. When you want an output from the event loop, you must pass a callback to get something returned.

---

### Event Handling and User Input

**User events** happen when a user is interacting with our software. Mouse clicks on a link or button, form submission, draggin and dropping elements are all considered events. They can occur any time while our app is running, so we must handle them asynchronously.

Node's `process.stdin` object deals with "standard input". We use the `on` method on `stdin` to *register a callback*. It is meant to run any time the user provides input to the program. The `process.stdout` object can then be used to provide an output.

```javascript
// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  process.stdout.write('.');
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }
});
```
---

### Readline

The [readline](https://github.com/nodejs/node/blob/master/doc/api/readline.md) module provides an interface for reading data from a Readable stream (such as process.stdin) one line at a time.

The `.question(query, callback)` function...
The `.close()` function...


### Tech Interview Review

1. **How can you empty an array in JavaScript?**

```javascript
array = [];
array.length = 0;
array.splice(0, array.length);
```

2. **Explain the difference between `==` and `===`?**

The triple-equal operator `===` behaves like any traditional equality operator would: evaluates to true if the two expressions on either of its sides have the same type and the same value. The double-equal operator `==`, however, tries to coerce the values before comparing them. It is therefore generally good practice to use the === rather than ==. The same holds true for !== vs !=.

3. **What are the six JavaScript data types?**

* Boolean
* Number
* String
* Null
* Undefined
* Symbol

4. **What would be the result of 3+2+"7"?**

Since 3 and 2 are integers, they will be added together to make 5. Since 7 is a string, it will resort to string concatenation, resulting in a string type. The result would be "57".

5. **What is asynchronous programming, and why is it important in JavaScript?**

Asynchronous programming allows functions to run simultaneously. While one function starts running, other functions may begin to run and finish their jobs at different times. When each action finishes, the program is informed and gets access to the results.

6. **Explain JavaScript's `for..in` loop**

The for..in loop is used to iterate through the properties of an object. More specifically, it loops through each key. The syntax for the `for..in` loop is:

```javascript
for (let key in object) {
  // statement or block to execute for each key
}
```

In each repetition, one property from the object is associated to the variable (named *key* above), and the loop is continued until all of the properties of the object are depleted.

---

Classes, Functions, Inheritance, Polymorphism, Object Oriented Programming & Data Structures
https://leetcode.com/
https://www.hackerrank.com/