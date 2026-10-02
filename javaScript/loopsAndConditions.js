
/*
if satement

if
else
else if
else

one time check the condition

if (true) {
    console.log('You are right');
}

await page.goto('https://www.google.com');

let isDialog = await page.locator('#dialog').isVisible();

if (isDialog) {
    await page.locator('#dialog').click();
}

await page.locator('#PAlink').click();

*/


let studentAge = 17;

if (studentAge >= 18) {
    console.log('You are eligible to vote');
} else {
    console.log('You are not eligible to vote');
}

let x;
let y = 21;

if (x>y) {
    console.log('x is greater than y');
} else if (x<y) {
    console.log('x is less than y');
}
else if (x==y) {
    console.log('x is equal to y');
}
else {
    console.log('x is not defined or x is not a number');
}


/*
loops 

while loop 
do-while loop
for loop

//while loop
while loop run when condition is true 
if condition become false then it will stop the loop
use only when we dont know how many times we want to execute the block of code
Important we should aware about it will get false at some point otherwise it will run infinite time

while (isDialog) {
    console.log('This is while loop');
}

do-while loop

whether condition is true or false it will run at least one time

do {
    console.log('This is do-while loop');
} while (isDialog); //true


*/


let fuel = 10;  //fuel in litres

while (fuel > 0) {
    console.log('Car is running');
    fuel--;
}

fuel = 10;  //fuel in litres

do {
    console.log('Car is running');
    fuel--;
} while (fuel > 0);


/*
For loop

For loop executed when condition is true
block of code will execute untill condition become false
when we aware about how many times we have to run the block of code then we can use for loop


click on 10 links on the page

*/

for(let i=1; i<=10; i++) {
    console.log('Click on link number: ' + i);
}


//Wap to sum first 5 numbers using for loop 1-5 = 1+2+3+4+5=15

let sum = 0;
for(let i=1; i<=5; i++) {
    sum = sum + i;
}
console.log('Sum of first 5 numbers is: ' + sum);


//wap to print factorial 5
// 1*2*3*4*5 = 120

let fact = 1;
for(let i=1; i<=5; i++) {

fact = fact * i;

}

console.log('Factorial of 5 is: ' + fact);


//wap to print number from 1-10

for(let i=1; i<=10; i++) {
    console.log(i);
}

//wap to print number from 1-10 which are divisible by 2 and 5

for(let i=1; i<=10; i++) {
    if(i%2==0 && i%5==0) {
        console.log(i);
    }
}



