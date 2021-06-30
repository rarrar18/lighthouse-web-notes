# W01D04 - Callbacks in JS

## Instructor: Andy Lindsay

### Higher Order Functions: Filter
In Javascript and other functional programming languages, functions are values. Functions like filter() take in another function as an argument. Functions that you send into other functions are called callback functions. Since these functions slot into each other they are considered composable.

```javascript
const animals = [
    { name: 'Fluffy',   species: 'rabbit' },
    { name: 'Rusty',    species: 'dog' },
    { name: 'Biscuit',  species: 'dog' },
    { name: 'Beak',     species: 'bird' },
    { name: 'Paws',     species: 'cat'  },
    { name: 'Jimmy',    species: 'fish' }
]

const isDog = function(animal) {
  return animal.species === 'dog';
};

const dogs = animals.filter(isDog);
const otherAnimals = animals.reject(isDog);
/*
const dogs = animals.filter(function(animal) {
  return animal.species === 'dog'
})
*/
```
### Higher Order Functions: Map

```javascript
const animals = [
    { name: 'Fluffy',   species: 'rabbit' },
    { name: 'Rusty',    species: 'dog' },
    { name: 'Biscuit',  species: 'dog' },
    { name: 'Beak',     species: 'bird' },
    { name: 'Paws',     species: 'cat'  },
    { name: 'Jimmy',    species: 'fish' }
]
// callback function will pass each object in animals array
const names = animals.map(function(animal) {
  return animal.name + ' is a ' + animal.species;
});
```

```javascript
// FOREACH FUNCTION
const forEach = (arr, cb) => {
  for (const element of arr) {
    cb(element);
  }
};

const dogs = ['Fido', 'Barkley', 'Goldie', 'Clifford', 'Dioji'];
const behaviour = (dog) => {
  console.log(`Who's a good, ${dog}`)
};

forEach(dogs, behaviour);
```
```javascript
// MAP FUNCTION
const map = (arr, cb) => {
  const output = [];
  for (const element of arr) {
    const 
  }
};
```
```javascript
// FILTER FUNCTION
const filter = (arr, cb) => {
  const output = [];
  for (const element of arr) {
    const returnVal = cb(element);
    if (returnVal) {
      output.push(element);
    }
  }
  return output;
};

const behaviour = (dog) => {
  const result = dog.length > 5;
  //check for falsey or truthy values
  return result;
};
const filtered = filter(dogs.behaviour);
console.log(filtered);
```
```javascript
// CHAINING
const output = dogs
.filter((dog) => dog.length > 5);
.map((dog) => `Who's a good dog, ${dog}?`);
console.log(output);
```

```javascript
// FIND WALDO
const findWaldo = function(names, found) {
  // Loop through array(names)
  names.forEach((name, index) => {
    if (name === "Waldo") {
      found (index); 
      return; //execute callback and passes in index = to Waldo
    }
  });
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log(`Found Waldo at index ${index})!`);
});
// This will find Waldo in several indices
// It will log every occurence
```
```javascript
const findWaldo = function(names, found) {
  let index = 0;
  for (const name of names) {
    if (name === "Waldo") {
      found(index);
      return;
    }
    index++;
  }
};
findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log(`Found Waldo at index ${index})!`);
});
// This will only find Waldo once and exit
```

It calls the individual element, index, array. Everytime you pass the forEach function into an array, it will iterate through these three arguments.

## Recalling side effects
Every time you call pure functions, it will return the same result. To make it impure, you can make it interact with something out of our control (introducing a global variable, pushing it into an array, console.log(), etc.).
Given the same argument, it may not return the same value. For example, changing the value of something may change the web page.