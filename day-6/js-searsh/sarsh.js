// Object Creation with Object.assign
// Example 1: Simple Object Assignment
const target1 = {};
const source1 = { a: 1, b: 2 };
Object.assign(target1, source1);
console.log(target1); // { a: 1, b: 2 }

// Example 2: Merging Multiple Objects
const target2 = { a: 1 };
const source2a = { b: 2 };
const source2b = { c: 3 };
Object.assign(target2, source2a, source2b);
console.log(target2); // { a: 1, b: 2, c: 3 }

// Example 3: Overwriting Properties
const target3 = { a: 1, b: 2 };
const source3 = { b: 3, c: 4 };
Object.assign(target3, source3);
console.log(target3); // { a: 1, b: 3, c: 4 }

// Example 4: Nested Object Assignment
const target4 = { a: { d: 1 } };
const source4 = { a: { e: 2 } };
Object.assign(target4, source4);
console.log(target4); // { a: { e: 2 } }

// Example 5: Creating a New Object
const source5a = { a: 1 };
const source5b = { b: 2 };
const newObject = Object.assign({}, source5a, source5b);
console.log(newObject); // { a: 1, b: 2 }

// PART 7: Destructuring Arrays & Objects
// Use Case 1: Basic Array Destructuring
const numbers1 = [1, 2, 3];
const [one, two, three] = numbers1;
console.log(one, two, three); // 1 2 3

// Use Case 2: Skipping Values in Array Destructuring
const numbers2 = [1, 2, 3, 4];
const [first, , third] = numbers2;
console.log(first, third); // 1 3

// Use Case 3: Using Rest Operator in Array Destructuring
const numbers3 = [1, 2, 3, 4];
const [firstNum, ...restNums] = numbers3;
console.log(firstNum); // 1
console.log(restNums); // [2, 3, 4]

// Use Case 4: Basic Object Destructuring
const person1 = { name: 'John', age: 30 };
const { name, age } = person1;
console.log(name, age); // John 30

// Use Case 5: Renaming Variables in Object Destructuring
const person2 = { name: 'John', age: 30 };
const { name: firstName, age: yearsOld } = person2;
console.log(firstName, yearsOld); // John 30

// Use Case 6: Default Values in Object Destructuring
const person3 = { name: 'John' };
const { name: nameDefault, age: ageDefault = 25 } = person3;
console.log(nameDefault, ageDefault); // John 25

// Use Case 7: Nested Object Destructuring
const person4 = {
    name: 'John',
    address: {
        city: 'New York',
        zip: '10001'
    }
};
const { address: { city, zip } } = person4;
console.log(city, zip); // New York 10001

// Use Case 8: Combining Array and Object Destructuring
const people = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 }
];
const [{ name: firstName1 }, { name: firstName2 }] = people;
console.log(firstName1, firstName2); // John Jane

// Use Case 9: Function Parameters Destructuring
function greet({ name, age }) {
    console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}

const person5 = { name: 'John', age: 30 };
greet(person5); // Hello, my name is John and I am 30 years old.

// Use Case 10: Destructuring with Rest in Object
const person6 = { name: 'John', age: 30, city: 'New York' };
const { name: nameRest, ...restDetails } = person6;
console.log(nameRest); // John
console.log(restDetails); // { age: 30, city: 'New York' }