//  Declaring Variables var, const, let
const name = "John Doe"; // for const -> the type and value should not change
let age = 24; // for let, reassignment (we can change the value) can happen
age = 26;
// var amount = 1000.50; // var keyword -> not recommended

// Rules for naming variables
// Can't start with a number
// let personSkd;

/*
Multiline
comments
*/

// Arithmetic Operators + - / * =(Assignment)
let total = 10 + 5;
// console.log(total);
// document.writeln(total);

let difference = 85 - 15;
// document.writeln(difference);

let product = 8 * 5;
// square the product
product = product * product;
// document.writeln(product);

let quotient = 80 / 20;
// document.writeln(quotient);

/* Modulus -> used to find the division remainder */
let a = 23,
    b = 10;
let division = a / b;
let remainder = a % b;
// document.writeln("14 / 2 = " + parseInt(division) + " remainder " + remainder);
// document.writeln(`${a} / ${b} = ${parseInt(division)} remainder ${remainder}`); // Backticks -> ``

/* Increment and Decrement */
let number = 34;
// number++; // Increase the value of number by 1

number--; // Decrease the value of number by 1
// document.writeln(number);

/* Exponential operator(power) -> ** */
let square = 2 ** 3; // 2 * 2 * 2 = 8
square += 2; // square = square + 2;
square -= 5; // square = square - 5;
// document.writeln(square);

let num1 = 25,
    num2 = 103;
/* Comparison Operators */
const isEqual = num1 == num2; // is num1 equal to num2
const notEqual = num1 != num2; // is num1 not equal to num2
// document.writeln(isEqual)
// document.writeln(notEqual)

const greaterThan = num1 > num2; // is num1 greater than num2
// document.writeln(greaterThan);
const lessThan = num1 < num2; // is num1 less than num2
// document.writeln(lessThan);
const greaterOrEqual = num1 >= num2; // is num1 greater than or equal to num2
const lessOrEqual = num1 <= num2; // is num1 less than or equal to num2

// === -> equality in value and equality in type
// document.writeln(`20 === 20 = ${20 === 20} <br>`);
// document.writeln(`20 === "20" = ${20 === "20"} <br><br>`);

// == -> equality in value
// document.writeln(`20 == 20 = ${20 == 20} <br>`);
// document.writeln(`20 == "20" = ${20 == "20"} <br><br>`);

/* Ternary Operator ? */
// (comparison) ? value if true : value if false;
const personAge = 17;
const ageValue = personAge >= 18 ? "You are an adult" : "Underage, only adults allowed";
// document.writeln(ageValue);

/* Concatenation -> joining strings */
// document.writeln("My name is " + name + ", I am " + personAge + " years old.");
// document.writeln(`My name is ${name}, I am ${personAge} years old.`);

/* Logical Operators -> and(&&), or(||), not(!) */
// document.writeln(!(2 > 10));

// &&(and) only returns true if all conditions are true, otherwise it returns false
// document.writeln( (20 == 20) && (10 == 10) );

// ||(or) returns true if at least one condition is true
// document.writeln( (20 == 2) || (10 == 1) );

/* Data Types: string, number, boolean, object, symbol, bigint, undefined, null */
// Built in objects -> objects, arrays, dates, maps, sets, promises, null

// document.writeln(typeof "Hello World!"); -> string
// document.writeln(typeof 200.50); -> number
// document.writeln(typeof true); -> boolean
// document.writeln(typeof undefined); -> undefined
// document.writeln(typeof null); -> object
// document.writeln(typeof age); -> number

// Strings -> ""  ''  ``

/* Objects */
// Defining a car object { [key] : value}
const car = {
    name: "BMW",
    model: "X1",
    "is Used": true,
    yearOfManufacture: 2020,
    describe() {
        const usedStatus = this["is Used"]
            ? "This car is used"
            : "This car is brand new";
        // document.writeln(`This car is a ${this.name} ${this.model}, ${usedStatus}.
        //     It was manufactured in ${this.yearOfManufacture}.
        //     `);
        console.log(`This car is a ${this.name} ${this.model}, ${usedStatus}.
            It was manufactured in ${this.yearOfManufacture}.
            `);
    },
};

// Accessing Object properties
// document.writeln(car['yearOfManufacture']);
// document.writeln(car.name);

car.name = "Audi";
car.model = "Q1";
car["is Used"] = false;

// console.log(Object.keys(car));
// console.log(Object.values(car));
// car.describe();

/* Arrays */
const names = ["John", "Mary", "Peter", "Joyce"];
// const names = new Array('John', 'Mary', 'Peter', 'Joyce')
//            [   0  ,   1   ,    2   , 3      ];
// An array index starts from 0

// console.log(names[4]); -> undefined
names[4] = "Doe";
// console.log(names[4]);
names[1] = "Mary Jane";

// console.log(names.toString());
// console.log(typeof names);

// names.sort();
names.push('New Name'); // adds new item at the end
console.log(names);
// console.log(names[0]); // first item
// console.log(names[names.length - 1]); // last item

/* Looping through array items */
// Named function
// function printName(name, index) {
//     console.log(index, name);
// }
// names.forEach(printName);

// Anonymous function
// names.forEach(function (name, index) {
//     console.log(index, name);
// })

// Arrow function
// names.forEach((name, index) => {
//     console.log(index, name);
// });

// function 'myFunction' defines the parameters name and age
function myFunction(name, age) {
    console.log("My name is " + name + ", I am " + age + " years old.");
}

// calling the function and providing arguments
// myFunction('Kelvin', age);

// (function (name, age) {
//     console.log("My name is " + name + ", I am " + age + " years old.");
// })("John", 50);


/* Output in Javascript */
// JS in Browser
// document (Manipulate the HTML Document -> DOM)
// document.getElementById(); -> browser
// document.writeln("Some text") -> Printed on the Body (Html Document)
// console.log() -> Prints content on the Browser Console (Developer Tools)

// JS outside Browser -> nodejs, denojs
// document and methods linked to document NOT SUPPORTED
// console.log() // -> Prints content on the Terminal, Command Prompt
