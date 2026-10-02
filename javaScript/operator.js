/*

Operators in JavaScript-

Operator is a symbol or keyword that can perform any operation or task 
which provide us output value.

Types of Operators in JavaScript-

1. Arithmetic Operators - Used to perform arithmetic operations on numbers/mathematical operations
example: +, -, *, /, %, ++, --
2. Assignment Operators - Used to assign values to variables
example: =, +=, -=, *=, /=, %=
let num = 10;
3. Comparison Operators - Used to compare two values and return a boolean value (true or false)
example: ==, ===, !=, !==, >, <, >=, <=
a==b
4. Logical Operators - Used to combine multiple boolean expressions and return a boolean value
example: &&, ||, !
5. string Operators - Used to concatenate strings
example: +, +=
let str1 = 'Hello';
let str2 = 'World';
let result = str1 + ' ' + str2;  //output: Hello World

*/

//Arithemetic Operators
let a = 10;
let b = 5;
let addition = a + b;  //output: 15
console.log(addition);

let subtraction = a - b;  //output: 5
console.log(subtraction);

let multiplication = a * b;  //output: 50
console.log(multiplication);

let division = a / b;  //output: 2
console.log(division);

let modulus = a % b;  //output: 0
console.log(modulus);

//Assignement Operators

let x = 50;
console.log(x);
x= x+5;  //output: 55  Equivalent to x+=5
console.log(x);

x-=10;
console.log(x);  //output: 45

x*=2;
console.log(x);  //output: 90

x/=3;
console.log(x);  //output: 30

//Comparison Operators

let c=10;   //number
let d='10'; //string

let isEqual = c==d;  //output: true
console.log(isEqual);

let isStrictEqual = c===d;  //output: false
console.log(isStrictEqual);

//What is the differnce between =, == and === operator?

let isGreaterthan = c>d;  //output: false
console.log(isGreaterthan);

let isLessthan = c<d;  //output: false
console.log(isLessthan);

let e = 20;
let f= 20;

let isGreaterthanEqual = e>=f;  //output: true
console.log(isGreaterthanEqual);

let islessthanEqual = e<=f;  //output: true
console.log(islessthanEqual);

let isNotEqual = e!=f;  //output: false
console.log(isNotEqual);


/*Logical Operators
// It is used for combining multiple conditions together
// && - AND operator
// || - OR operator
// ! - NOT operator

&& And
T * T = T
T * F = F
F * T = F
F * F = F

|| OR
T + T = T
T + F = T
F + T = T
F + F = F


*/

a = 10;
b = 20;

let andOperator = (a>5) && (b>15);  //output: true
console.log(andOperator);

let andOperator2 = (a>15) && (b>15);  //output: false
console.log(andOperator2);

let orOperator = (a>15) || (b>30);  //output: false
console.log(orOperator);

let orOperator2 = (a>15) || (b>10);  //output: true
console.log(orOperator2);

let notOperator = !(a>15 || b>10);  //output: false
console.log(notOperator);

//string Operators
let str1 = 'Hello';
let str2 = 'World';
let result = str1 + str2;   //HelloWorld
console.log(result);

result = str1 + ' ' + str2;  //Hello World
console.log(result);

let firstName = 'John';
let lastName = 'Doe';

let userName = firstName + ' ' + lastName;  //John Doe
console.log(userName);













