// Create a variable to hold start time
const start = Date.now();
console.log("start: ", start);

// Function definition: name is the cb, duration is the number of milliseconds it takes until cb ends, next is the following cb (assigns null as a default value to next)
function doAction(name, duration, next = null) {
  const now = new Date();

  // Check the time in milliseconds when something runs
  console.log(`${now.getTime() - start}: Starting ${name}`);

  // Defines anon function, schedules cb, executes it at 'duration' milliseconds in the future, the cb then runs at that scheduled time
  setTimeout( () => {
    const then = new Date();
    console.log(`${then.getTime() - start}: Ending ${name}`);
    // Direct comparison as a conditional, run next() if it exists
    if (null !== next) {
      next();
    }
  }, duration );
};

// Passes in look() as a cb in doAction() to keep running itself
const look = () => {
  doAction("Look", 3333, look);
};
// Defining function
const getUp = () => {
  doAction("Get Up", 5000, walk);
};
// Defining function
const walk = () => {
  doAction("Walk", 8000, openDoor);
};
// Defining function
const openDoor = () => {
  doAction("Open Door", 3000, walkThroughDoor);
};
// Defining function
const walkThroughDoor = () => {
  doAction("Walk Through Door", 4000);
};

// Find out at what time did we end
const end = Date.now();
console.log("end: ", end);
console.log("duration: ", end - start);

look(); // Passed in as a cb in doAction()
getUp(); // Passed in as a cb in doAction()

console.log("I am done being programmed.");

// OUTPUT
// => start:
// => Starting: Look, Get Up, Walk, Open The Door, Walk Through Door
// => end:
// => duration:
// => Ending: Look, Open The Door, Walk Through Door, Get Up, Walk