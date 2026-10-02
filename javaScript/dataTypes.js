/*
------Data types in JavaScript------

kind of value which variable is storing is called data type

there 2 types of data types in JavaScript

1. Primitive data types ---- immutable data types and fixed in size and holds the single value
2. Non-primitive data types --- 


let name = 'John";  //string  memory allocation - 1001
let age = 30;  //number  memory allocation - 1002
let isMarried = true;  //boolean  memory allocation - 1003

name = 'Smith';  //string  memory allocation - 1004

There are 7 primitive data types in JavaScript

1. String - Represents sequence of characters enclosed in single or double quote

let country = 'USA---------------------';

2. Number - Represents numeric values, can be integer or floating point

let age = 30;
let price = 99.99;

3. Boolean - Represents logical values, can be either true or false

let isMarried = true;
let isStudent = false;

4.Null - Represents the intentional absence of any object value

let result = null;
let searchbox = null;

5. Undefined - Represents a variable that has been declared but has not been assigned a value

let name;
console.log(name); // Output: undefined

name  = 'John';
console.log(name); // Output: John

6.BigInt - Represents whole numbers larger than 2^53 - 1

let bigNumber = 1234567890123456789012345678901234567890n;

7. Symbol - Represents a unique and immutable value, often used as object property keys

let uniqueId = Symbol('id');



Non primitive data types in JavaScript are objects, arrays, and functions. 
They can hold multiple values and are mutable.

1. Object - Represents a collection of key-value pairs

let emp102 = {
  name: 'John',
  age: 30,
  isMarried: true
  empID: 12345
  Department: 'IT'
};

console.log(employee.name);  // Output: John
console.log(employee.age);  // Output: 30
console.log(employee);  // Output: { name: 'John', age: 30, isMarried: true, empID: 12345, Department: 'IT' }


2. Array - Represents an ordered list of values

let fruits = ['apple', 'banana', 'orange'];
console.log(fruits[0]);  // Output: apple

3. Function - Represents a reusable block of code that can be called with arguments and returns a value

function greet(name) { 
  return `Hello, ${name}!`;
}

console.log(greet('BHUSHAN`'));  // Output: Hello, bHUSHAN!

*/


let name  = 'Hello, World!';  // String
console.log(typeof name);  // Output: string

let age = 25;  // Number
console.log(typeof age);  // Output: number

let isStudent = true;  // Boolean
console.log(typeof isStudent);  // Output: boolean

console.log(isStudent);  // Output: true
console.log("isStudent");

let searchTextbox = null;  // Null
console.log(typeof searchTextbox);  // Output: object
console.log(searchTextbox);  // Output: null

let results;  // Undefined
console.log(typeof results);  // Output: undefined
console.log(results);  // Output: undefined

let bigNumber = 1234567890123456789012345678901234567890n;  // BigInt
console.log(typeof bigNumber);  // Output: bigint
console.log(bigNumber);  // Output: 1234567890123456789012345678901234567890n

let x = Symbol('id');  // Symbol
console.log(typeof x);  // Output: symbol
console.log(x);  // Output: Symbol(id)


const userName=  'price@xdss.com';
const password = '123456';


console.log(userName);  // Output:
console.log(password);  // Output: 123456







