// Day 4
// ###########################################

// 1.	Look Different Syntax  => 3 Example

function double(x) {
    return x * 2;
}
console.log(double(5)); // 10

// -----------
// oop
function Person(name, age) {
    this.name1 = name;
    this.age2 = age;
}

const n = new Person('John', 30);
console.log(n.name1, n.age2); // John 30
//-----------

// //  opject 

const person = {
    name: 'John',
    age: 30
};
console.log(person.name, person.age); // John 30

function add(x, y) {
    return x + y;
}
console.log(add(5, 5)); // 10

//-------------------------------

// 3.	Loop - While vs for - 3 Example

// 1 while -3 Example
let i = 1;
while (i <= 5) {
    console.log(i);
    i++; // out: 1, 2 , 3 , 4 , 5
}


// let userInput;
// while (!userInput || userInput.trim() === '') {
//     userInput = prompt('Please enter your name:');
// }
// console.log(`Hello, ${userInput}!`);


// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let ii = 0;
// while (ii <= arr.length) {
//     if (arr[ii] === 5) {
//         console.log(`Found 5 at index ${ii}!`);
//         break;
//     }
//     i++;
// }


// -----
// // for -3 Example

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

const colors = ['red', 'green', 'blue', 'yellow'];
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

const prson = { name: 'John', age: 30, occupation: 'Developer' };
for (let prop in prson) {
    console.log(`${prop}: ${prson[prop]}`);
}

// -----------------------------------------------

// 4.	Loop - Do While - 3 Example

let ist = 1;
do {
    console.log(ist);
    ist++;
} while (ist <= 10);

// let userInput;
// do {
//     userInput = prompt('Please enter your age (must be a number):');
// } while (isNaN(userInput) || userInput < 0);
// console.log(`You are ${userInput} years old.`);


// const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sst = 0;
// do {
//     if (arr2[sst] === 5) {
//         console.log(`Found 5 at index ${sst}!`);
//         break;
//     }
//     i++;
// } while (sst < arr2.length); // out: Found 5 at index 4!



//-------------------------------------------------------
// 5.	function generateYears(start, end, excude)

function mak(splet, end) {
    for (var i = splet; i <= end; i++) {
        console.log(i);
    }
}
mak(1, 100);


function generateYears(start, end, exclude) {
    const years = [];
    for (let year = start; year <= end; year++) {
        if (!exclude.includes(year)) {
            years.push(year);
        }
    }
    return years;
}

const startYear = 2000;
const endYear = 2010;
let excludeYears = [2002, 2005, 2008];

const generatedYears = generateYears(startYear, endYear, excludeYears);
console.log(generatedYears); // Output:  [2000, 2001, 2003, 2004, 2006, 2007, 2009, 2010]



// -----------------------------------------

// Loop vs Recursion
// recursion is simply when a function clals itself multiple times


// // Loop
function mak(splet) {
    let a = 0;
    for (var i = splet; i >= 1; i--) {
        a += i;
    }
    return a;
}
console.log(mak(5))


// recursion
function factorial(num) {
    if (num === 0) {
        return 1; // base case
    } else {
        return num * factorial(num - 1); // recursive call
    }
}
console.log(factorial(4)); //  4 * 3 * 2 * 1 = out: 24 

// // // factorial(4);
// // // calls factorial(3)
// // //   calls factorial(2)
// // //     calls factorial(1)
// // //       calls factorial(0)
// // //         returns 1(base case)
// // //       returns 1 * 1 = 1
// // //     returns 2 * 1 = 2
// // //   returns 3 * 2 = 6
// // // returns 4 * 6 = 24


function mak(splet) {
    if (splet === 0) {
        return 0;
    }
    return splet + mak(splet - 1);
}

console.log(mak(5))


// ---------------------------

// 7	Using Debugger 

const click = document.querySelector(".btn")
let count = 0;

click.addEventListener("click", () => {
    count = count + 1
    click.textContent = `${count} chick`
})
